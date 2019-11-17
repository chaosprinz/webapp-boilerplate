import React from 'react'

const Header = ({children, title}) => (
  <div className='header'>
    <h1 className='title'>{title}</h1>
    {children}
  </div>
)

export default Header
