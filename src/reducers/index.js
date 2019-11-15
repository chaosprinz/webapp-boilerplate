import {combineReducers} from 'redux'
import defaultReducer from './defaultReducer'

const rootReducer = combineReducers({
  doc: defaultReducer
})

export default rootReducer
