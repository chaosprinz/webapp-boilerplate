import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateDoc, reqestDoc} from '../actions/defaultActions'
import User from '../containers/user'
import Header from './header'

const AppBody = ({title}) => {
  return (
  <div className='reactApp'>
    <Header title={title}>
      <User />
    </Header>
  </div>
)}

export default AppBody
