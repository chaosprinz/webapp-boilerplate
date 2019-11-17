import {TOGGLE_USER_EDIT_MODE} from '../actions/user_actions'

export default (state = false, {type, payload}) => {
  console.log('type', type )
  console.log('action-name', TOGGLE_USER_EDIT_MODE)
  console.log(payload)
  switch (type) {
    case TOGGLE_USER_EDIT_MODE:
      return payload.toggle
    default:
      return state
  }
}
