const {filter, map, equals, not, curry} = require('ramda')

const update = curry((i, payload, state) =>
  map(val => (equals(val['_id'], payload['_id']) ? payload : val), state))

const del = curry((i, payload, state) =>
  filter(val => (not(equals(val['_id'], payload['_id']))), state)
)

module.exports = {
  update,
  del
}
