export const USER_LOG_IN = 'user:logIn'

export const userLogin = (user) => (
  (dispatch) => ({
    type: USER_LOG_IN,
    payload: user
  })
)

export const unknownUser = {
  _id: '0000',
  name: 'unknown',
  clientId: ''
}
