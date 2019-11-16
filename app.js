const express=require('express')
const http = require('http')
const config = {
  db: require('./config/db')
}
const PouchDB = require('pouchdb').defaults({
  prefix: config.db.prefix
})

const app = express()
const server = http.createServer(app)
const db = new PouchDB(`${config.db.name}`)

const syncConf = config.db.syncDB
const syncDb = `${syncConf.host}:${syncConf.port}/${syncConf.dbName}`
const PORT = process.env.PORT || 3001

if (config.db.sync) {
  db.sync(syncDb, {
    live: true,
    retry: true
  })
  .on('error', err => console.error('DB-sync-error: ', err))
}

app.get('/api', (req, res) => {
  res.json({
    doc: 'Hello World!!!'
  })
})

app.use('/api/db', require('express-pouchdb')(PouchDB, {
  logPath: config.db.logFile,
  configPath: config.db.configPath
}))

app.listen(PORT, () => {
  console.log('API-server listening on ' + PORT)
})
