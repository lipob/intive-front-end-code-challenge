export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'

export interface SetIsLoggedIn {
  type: typeof SET_IS_LOGGED_IN
  payload: boolean
}

export type SessionDispatchTypes = SetIsLoggedIn
