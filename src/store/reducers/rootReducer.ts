import usersReducer from './users'
import sessionReducer from './session'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export { rootReducer }
