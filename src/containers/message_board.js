import {equals, not} from 'ramda'
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {MessageContext, UserContext} from '../context'
import MessageList from '../components/message_list'
import MessageForm from '../components/message_form'
import MessageSearch from '../components/message_search'
import {unknownUser} from '../actions/user_actions'
import {addMessage, editMsg} from '../actions/message_actions'

const mapStateToProps = (state, props) => ({
  editedMessage: state.editedMessage
})

const mapActionsToProps = (dispatch, props) => (
  bindActionCreators({
    addMessage,
    editMsg
  }, dispatch)
)

const renderMessageBoard = (user, messages, addMsg, editedMsg, editMsg) => {
  const submitMessageForm = e => {
    e.preventDefault()
    addMsg({
      ...editedMsg,
      creator: user
    })
  }
  const onChange = e => {
    let msg = editedMsg
    msg[e.target.name] = e.target.value
    editMsg(msg)
  }
  return (
    <React.Fragment>
      <MessageSearch />
      <MessageList messages={messages}/>
      {
        not(
          equals(user._id, unknownUser._id)) &&
            <MessageForm
              user={user}
              onSubmit={submitMessageForm}
              onChange={onChange}
              editMsg={editedMsg}
            />
      }
    </React.Fragment>
  )
}
const MessageBoard = ({addMessage, editedMessage, editMsg}) => {
  return (
    <UserContext.Consumer>
      {user => (
        <MessageContext.Consumer>
          {messages => renderMessageBoard(
            user,
            messages,
            addMessage,
            editedMessage,
            editMsg
          )}
        </MessageContext.Consumer>
      )}
    </UserContext.Consumer>
  )
}

export default  connect(mapStateToProps,mapActionsToProps)(MessageBoard)
