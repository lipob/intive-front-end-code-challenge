export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN'
export const SET_USER_LOGGED_OUT = 'SET_USER_LOGGED_OUT'

export interface LoggedUser {
  isLoggedIn: boolean
  user: string
}

export interface SetUserLoggedIn {
  type: typeof SET_USER_LOGGED_IN
  payload: LoggedUser
}

export interface SetUserLoggedOut {
  type: typeof SET_USER_LOGGED_OUT
}

export type SessionDispatchTypes = SetUserLoggedIn | SetUserLoggedOut
