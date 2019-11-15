import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateDoc, reqestDoc} from '../actions/defaultActions'

const App = ({doc, requestDoc}) => {
  useEffect(() => {
    requestDoc()
  }, [])
  return (
  <div className='reactApp'>
    <h1>{doc}</h1>
  </div>
)}

const mapStateToProps = (state, props) => ({
  doc: state.doc
})

const mapActionsToProps = (dispatch, props) => (
  bindActionCreators({
    onUpdateDoc: updateDoc,
    requestDoc: reqestDoc
  }, dispatch)
)

export default connect(mapStateToProps, mapActionsToProps)(App)
