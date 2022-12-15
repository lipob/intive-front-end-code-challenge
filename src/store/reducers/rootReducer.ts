import { User } from '../../types'
import * as ActionTypes from '../actions/types'

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

const rootReducer = (state = initialState, action: ActionTypes.UsersDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: state.users.concat(action.payload),
        page: state.page + 1,
        loading: false,
      }
    case ActionTypes.GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default rootReducer
