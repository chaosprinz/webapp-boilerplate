import {UPDATE_DEFAULT_DOC} from '../actions/defaultActions'

const defaultReducer = (state = [], {type, payload}) => {
  switch (type) {
    case UPDATE_DEFAULT_DOC:
      return payload.doc
    default:
      return state}
}

export default defaultReducer
