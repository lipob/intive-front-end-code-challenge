import axios from 'axios'
import { Dispatch } from 'redux'
import { User } from '../../types'
import * as UsersActionTypes from './types/users'

const mapUsersData = (data: any[]): User[] => {
  const usersData = data.map(user => ({
    fullName: `${user.name.first} ${user.name.last}`,
    username: user.login.username,
    picture: user.picture.large,
    thumb: user.picture.medium,
    address: `${user.location.street.number} ${user.location.street.name}`,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    postCode: user.location.postcode,
    timeZone: `${user.location.timezone.offset} ${user.location.timezone.description}`,
    email: user.email,
    phone: user.phone,
    cell: user.cell,
  }))

  return usersData
}

const getUsers = (page: number, results: number) => async (dispatch: Dispatch<UsersActionTypes.UsersDispatchTypes>) => {
  try {
    dispatch({
      type: UsersActionTypes.GET_USERS_LOADING,
    })

    const url = `https://randomuser.me/api/?page=${page}&results=${results}`
    const { data } = await axios.get(url)

    const mappedUserData = mapUsersData(data.results)

    dispatch({
      type: UsersActionTypes.GET_USERS_SUCCESS,
      payload: mappedUserData,
      page,
    })
  } catch (error) {
    dispatch({
      type: UsersActionTypes.GET_USERS_FAILS,
    })
  }
}

export { getUsers }
