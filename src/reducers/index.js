import {combineReducers} from 'redux'
import userReducer from './user_reducer'
import messageReducer from './message_reducer'
import userEditModeReducer from './user_edit_mode_reducer'
import messageEditReducer from './message_edit_reducer'

const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
  userEditMode: userEditModeReducer,
  editedMessage: messageEditReducer
})

export default rootReducer
