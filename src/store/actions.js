import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = (page, results) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=${results}`);
    dispatch({
      type: GET_USERS,
      payload: data.results,
      page
    })
  }
  catch(error) {
    console.error(error)
  }
}