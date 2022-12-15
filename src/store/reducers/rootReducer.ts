import { User } from '../../types'
import * as UsersActionTypes from '../actions/types/users'
import * as SessionActionTypes from '../actions/types/session'

export interface AppState {
  users: User[]
  page: number
  loading: boolean
  isLoggedIn: boolean
}

const initialState: AppState = {
  users: [],
  page: 1,
  loading: false,
  isLoggedIn: false,
}

const rootReducer = (
  state = initialState,
  action: UsersActionTypes.UsersDispatchTypes | SessionActionTypes.SessionDispatchTypes
) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: state.users.concat(action.payload),
        page: state.page + 1,
        loading: false,
      }
    case UsersActionTypes.GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SessionActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
