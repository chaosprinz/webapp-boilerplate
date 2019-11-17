/**
Defaults for unknown user
*/
export const unknownUser = {
  _id: '0000',
  name: 'unknown',
  clientId: ''
}

/**
user-action-names
*/
export const USER_LOG_IN = 'user:logIn'
export const TOGGLE_USER_EDIT_MODE = 'user:toggleEdit'

/**
user-action-creators
*/
export const userLogin = (user) => ({
  type: USER_LOG_IN,
  payload: user
})


export const toggleEdit = (toggle) => ({
  type: TOGGLE_USER_EDIT_MODE,
  payload: {
    toggle
  }
})
