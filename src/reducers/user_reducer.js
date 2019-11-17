import {USER_LOG_IN} from '../actions/user_actions'
import uuid from '../../helper/uuid_generator'

/**
# userReducer
sets the user-state. _id and clientId are created as uuid when not in payload
@params {object} state
@params {object} action(type, payload)
@return {object} new state for user
*/
const userReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case USER_LOG_IN:
      return {
        _id: payload._id || uuid(),
        name: payload.name,
        clientId: payload.clientId || uuid()
      }
    default:
      return state
  }
}

export default userReducer
