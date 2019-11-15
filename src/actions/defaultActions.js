import fetch from 'isomorphic-unfetch'

export const UPDATE_DEFAULT_DOC = 'doc:updateDoc'
export const REQUEST_DEFAULT_DOC = 'doc:requestDoc'

export const updateDoc = newDoc => ({
  type: UPDATE_DEFAULT_DOC,
  payload: {
    doc: newDoc
  }
})

export const reqestDoc = () => (
  (dispatch) => {
    fetch('http://localhost:3000/api')
    .then(
      res => res.json(),
      err => console.error(err)
    )
    .then(
      data => dispatch({
        type: UPDATE_DEFAULT_DOC,
        payload: {
          doc: data.doc
        }
      })
    )
  }
)
