import React from "react"
import ReactDOM from "react-dom"

const title = "Hello world!"
ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('root')
)

module.hot.accept()
