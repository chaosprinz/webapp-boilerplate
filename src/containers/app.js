import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MessageForm from '../components/message_form'
import AppBody from '../components/app_body'
import Header from '../components/header'
import unknownUser from '../actions/user_actions'
import {UserContext} from '../context'

/**
# App-Container-Component
provides the user- and messages-state for the underlying render-components,
using through reacts context-api
@params {object} props(user, messages) props are mapped from the state
@return (component) returns the main app-component
*/
const App = ({user, messages}) => {
  return (
    <UserContext.Provider value={user}>
      <AppBody title='MessengerNG'/>
    </UserContext.Provider>
  )
}

/**
map the state of user and messages to the props of the main app-component
*/
const mapStateToProps = (state, props) => {
  return ({
    user: state.user,
    messages: state.messages
  })
}

const mapActionsToProps = (dispatch, props) => (
  bindActionCreators({
  }, dispatch)
)

export default connect(mapStateToProps, mapActionsToProps)(App)
