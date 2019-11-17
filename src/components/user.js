import React from 'react'

/**
# User-Component
renders a given user, while providing edit-feature for her/him/*
@params {object} props(user, editmode, logIn, toggleEdit)
@prop {object} user {_id, name} the actual logged in user
@prop {bool} editmode true when user is edited, false for rendering
@prop {function} logIn used as event-handler for user-name-input
@prop {function} toggleEdit used as event-handler for open and closing the
@return {compenent} rendered User-component
    user-edit-form
*/
export default ({user, editmode = false, logIn, toggleEdit}) => (
  <div className="user">
    <div className={`user user-${user._id}`} id={`${user._id}`}>
      Hello {editmode ?
              <input type='text'
                defaultValue={user.name}
                onChange={e => logIn(e, user)}
                onBlur={e => toggleEdit(e, user)}/> :
              <span>{user.name} <a href='#edit-user' onClick={e => toggleEdit(e, user)}>{"<<<"}</a></span>
            }
    </div>
  </div>
)
