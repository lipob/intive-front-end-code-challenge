import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
