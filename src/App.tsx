import React, { FC } from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer'
import store from './store'
import UserDetails from './views/UserDetails/UserDetails'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import Login from './views/Login/Login'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: '/user/:username',
    element: (
      <RequireAuth>
        <UserDetails />
      </RequireAuth>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="appWrapper">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
