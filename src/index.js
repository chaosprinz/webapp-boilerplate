import React from "react"
import ReactDOM from "react-dom"
import {applyMiddleware, compose, createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from "./components/app"

const storeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const initialState = {
  doc: ""
}

const store = createStore(rootReducer, initialState, storeEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
)

module.hot.accept()
