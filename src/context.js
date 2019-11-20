import React, {createContext} from 'react'
import {unknownUser} from './actions/user_actions'

export const MessageContext = createContext([])
export const UserContext = createContext(unknownUser)
