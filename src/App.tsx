import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import ProfileDetail from './components/UserDetail/UserDetail'
import Footer from './components/Footer/Footer'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user/:username',
    element: <ProfileDetail />,
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
