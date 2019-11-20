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
  userEditMode: false,
  messages: [
    {
      _id: 'd3c73c2b-e28d-431c-8f15-2711a6aba6a5',
      title: 'Number one',
      text: 'I am the first of many. We\'ll be legion.',
      creator: {
        _id: '0000',
        name: 'unknown'
      }
    }
  ],
  editedMessage: {
    _id: '',
    title: '',
    text: '',
    creator: {}
  }
}

const store = createStore(rootReducer, initialState, storeEnhancers)

export default store
