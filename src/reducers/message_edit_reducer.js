import {EDIT_MESSAGE} from '../actions/message_actions'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case EDIT_MESSAGE:
      return {
        title: payload.title || state.title,
        text: payload.text || state.text
      }
    default:
      return state
  }
}
