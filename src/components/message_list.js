import React from 'react'
import {map} from 'ramda'
import Message from '../components/message'

export default ({messages}) => (
  <ul className='message-list'>
    {
      map((msg) => (
        <Message title={msg.title} text={msg.text} key={msg._id}/>
      ) , messages)
    }
  </ul>
)
