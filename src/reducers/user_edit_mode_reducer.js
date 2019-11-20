import {TOGGLE_USER_EDIT_MODE} from '../actions/user_actions'

export default (state = false, {type, payload}) => {
switch (type) {
    case TOGGLE_USER_EDIT_MODE:
      return payload.toggle
    default:
      return state
  }
}
