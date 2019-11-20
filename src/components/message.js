import React from 'react'

export default ({title, text}) => (
  <li className='message'>
    <h3 className='message-title title'>{title}</h3>
    <div className='message-text'>{text}</div>
  </li>
)
