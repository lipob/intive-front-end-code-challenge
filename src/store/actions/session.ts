import * as SessionActionTypes from './types/session'
import { LoggedUser } from './types/session'

const setUserLoggedIn = (payload: LoggedUser) => ({
  type: SessionActionTypes.SET_USER_LOGGED_IN,
  payload,
})

const setUserLoggedOut = () => ({
  type: SessionActionTypes.SET_USER_LOGGED_OUT,
})

export { setUserLoggedIn, setUserLoggedOut }
