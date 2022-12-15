import { User } from '../../types'
import * as UsersActionTypes from '../actions/types/users'

export interface AppState {
  users: User[]
  page: number
  loading: boolean
}

const initialState: AppState = {
  users: [],
  page: 1,
  loading: false,
}

const usersReducer = (state = initialState, action: UsersActionTypes.UsersDispatchTypes) => {
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
    default:
      return state
  }
}

export default usersReducer
