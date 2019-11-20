import React from "react"
import ReactDOM from "react-dom"
import {connect, Provider} from 'react-redux'
import store from './store'

import 'normalize.css'
import './index.css'

import App from "./containers/app"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)

module.hot.accept()
