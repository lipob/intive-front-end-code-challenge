import { GET_USERS } from './actions';

const initialState = {
  users: [],
  page: 1
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload),
        page: state.page + 1
      }
    default: return state;
  }
}

export default rootReducer;