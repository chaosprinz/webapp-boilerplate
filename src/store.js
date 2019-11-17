import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const storeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const initialState = {
  user: {
    _id: '0000',
    name: 'unknown',
    clientId: ''
  },
  messages: []
}

const store = createStore(rootReducer, initialState, storeEnhancers)

export default store
