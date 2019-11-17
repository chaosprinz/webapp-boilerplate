import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateDoc, reqestDoc} from '../actions/defaultActions'
import MessageForm from '../components/message_form'
import AppBody from '../components/app_body'
import Header from '../components/header'
import unknownUser from '../actions/user_actions'
import {UserContext} from '../context'

const App = ({user, messages}) => {
  console.log(user)
  return (
    <UserContext.Provider value={user}>
      <AppBody title='MessengerNG'/>
    </UserContext.Provider>
  )
}

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
