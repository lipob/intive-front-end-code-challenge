import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=50');
    dispatch({
      type: GET_USERS,
      payload: data.results
    })
  }
  catch(error) {
    console.error(error)
  }
}