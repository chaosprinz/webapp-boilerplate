const express=require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 3001

app.get('/api', (req, res) => {
  res.json({
    doc: 'Hello World!!!'
  })
})

app.listen(PORT, () => {
  console.log('API-server listening on ' + PORT)
})
