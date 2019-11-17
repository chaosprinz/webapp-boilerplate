import React from 'react'
import RenderUser from '../components/user.js'
import {UserContext} from '../context'

export default () => {
  return (
    <UserContext.Consumer>
      {value => (
        <RenderUser user={value} />
      )}
    </UserContext.Consumer>
  )
}
