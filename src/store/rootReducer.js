import { GET_USERS, IS_LOADING } from './actions';

const initialState = {
  users: [],
  page: 1,
  loading: false
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload),
        page: state.page + 1,
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    default: return state;
  };
};

export default rootReducer;