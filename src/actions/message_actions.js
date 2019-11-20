export const ADD_MESSAGE = 'messages:addMsg'
export const UPDATE_MESSAGE = 'messages:updateMsg'
export const DELETE_MESSAGE = 'messages:deleteMsg'
export const EDIT_MESSAGE = 'messages:editMsg'

export const addMessage = msg => ({
  type: ADD_MESSAGE,
  payload: msg
})

export const updateMessage = msg => ({
  type: UPDATE_MESSAGE,
  payload: msg
})

export const deleteMessage = msg => ({
  type: DELETE_MESSAGE,
  payload: msg
})

export const editMsg = msg => ({
  type: EDIT_MESSAGE,
  payload: msg
})
