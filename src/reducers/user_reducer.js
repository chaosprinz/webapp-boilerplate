import {USER_LOG_IN} from '../actions/user_actions'
import uuid from '../../helper/uuid_generator'

const userReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case USER_LOG_IN:
      return {
        _id: payload.id || uuid(),
        name: payload.name,
        clientId: payload.id || uuid()
      }
    default:
      return state
  }
}

export default userReducer
