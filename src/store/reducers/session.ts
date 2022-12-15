import * as SessionActionTypes from '../actions/types/session'

export interface SeesionState {
  isLoggedIn: boolean
  user: string | null
}

const initialState: SeesionState = {
  isLoggedIn: false,
  user: null,
}

const sessionReducer = (state = initialState, action: SessionActionTypes.SessionDispatchTypes) => {
  switch (action.type) {
    case SessionActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    default:
      return state
  }
}

export default sessionReducer
