import { Reducer } from 'redux'
import * as SessionActionTypes from '../actions/types/session'

export interface SeesionState {
  isLoggedIn: boolean
  user: string | null
}

const initialState: SeesionState = {
  isLoggedIn: false,
  user: null,
}

const sessionReducer: Reducer<SeesionState, SessionActionTypes.SessionDispatchTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SessionActionTypes.SET_USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      }
    case SessionActionTypes.SET_USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}

export default sessionReducer
