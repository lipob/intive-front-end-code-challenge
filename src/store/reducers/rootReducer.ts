import usersReducer from './users'
import sessionReducer from './session'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
})

export { rootReducer }
