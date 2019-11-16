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

const PORT = process.env.PORT || 3001

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
