import React from 'react'
import RenderUser from '../components/user.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {UserContext} from '../context'
import {userLogin, unknownUser, toggleEdit} from '../actions/user_actions'

/**
# logIn
event-handler for the onChange-event of user-name-input
@params {function} action the action to apply on a given user
@return {function} a function over e(vent) and user which applies action
                   to user using e.target.value as a name and uses given
                   user-id when not unknown or undefined, when so
 **/
const logIn = (action) => (
  (e, user) => {
    action({
      name: e.target.value,
      _id: user._id === unknownUser._id ? undefined : user._id
    })
  }
)


/**
# toggleEditHandler
event-handler for the toggle-editmode-link
@params {function} action the action to apply to state
        {bool} val the value used when applying action
@return {function} a func over e(event) to toggle editmode
**/
const toggleEditHandler = (action, val) => (
  e => {
    e.preventDefault()
    return action(val)
  }
)


/** map state of editmode to props User-Container-Component */
const mapStateToProps = (state, props) => ({
  editmode: state.userEditMode
})


/**
map the  toggleEdit- and userLogin-Actions to User-Container-Component,
as helper for handling the neccesary events
*/
const mapActionsToProps = (dispatch, props) => (
  bindActionCreators({
    onToggleEdit: toggleEdit,
    onUserLogin: userLogin
  }, dispatch)
)


/**
# UserContainer
wrap the User-Component and pass down nesseary data to render it
 */
const UserContainer = ({editmode, onToggleEdit, onUserLogin}) => {
  return (
    <UserContext.Consumer>
      {value => (
        <RenderUser user={value}
          toggleEdit={toggleEditHandler(onToggleEdit, !editmode)}
          logIn={logIn(onUserLogin)}
          editmode={editmode} />
      )}
    </UserContext.Consumer>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(UserContainer)
