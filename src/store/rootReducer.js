import { GET_USERS } from './actions';

const initialState = {
  users: [],
  loading: true
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    default: return state;
  }
}

export default rootReducer;