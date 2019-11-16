const path = require('path')
const db = path.join(process.cwd(), 'db')
module.exports = {
  name: 'webapp_boilerplate',
  prefix: path.join(db, 'Pouch__'),
  logFile: path.join(db, 'Pouch__log.txt'),
  configPath: path.join(db, 'config.json')
}
