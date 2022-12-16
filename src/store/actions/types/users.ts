import { User } from '../../../types'

export const GET_USERS_LOADING = 'GET_USERS_LOADING'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILS = 'GET_USERS_FAILS'

export interface GetUsersLoading {
  type: typeof GET_USERS_LOADING
}
export interface GetUsersFails {
  type: typeof GET_USERS_FAILS
}
export interface GetUsersSuccess {
  type: typeof GET_USERS_SUCCESS
  payload: User[]
}

export type UsersDispatchTypes = GetUsersLoading | GetUsersFails | GetUsersSuccess
