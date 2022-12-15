import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer'
import store from './store'
import UserDetails from './views/UserDetails/UserDetails'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user/:username',
    element: <UserDetails />,
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
