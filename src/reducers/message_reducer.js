import {update, del} from './helper'
import {ADD_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE
} from '../actions/message_actions'
import uuid from '../../helper/uuid_generator'

const updateOnId = update('_id')
const delOnId = del('_id')

export default (state = [], {type, payload}) => {
  switch (type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          _id: uuid(),
          ...payload
        }
      ]
    case UPDATE_MESSAGE:
      return updateOnId(payload, state)
    case DELETE_MESSAGE:
      return delOnId(payload, state)
    default:
      return state
  }
}
