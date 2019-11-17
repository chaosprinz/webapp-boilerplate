import React from 'react'

export default ({user}) => (
  <div className="user">
    <div className={`user user-${user._id}`} id={`${user._id}`}>
      Hello {user.name}
    </div>
  </div>
)
