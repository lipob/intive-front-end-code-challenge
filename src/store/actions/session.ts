import * as SessionActionTypes from './types/session'

const setIsLoggedIn = (payload: boolean) => ({
  type: SessionActionTypes.SET_IS_LOGGED_IN,
  payload,
})

export { setIsLoggedIn }
