/* eslint-disable no-debugger */
import React, { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authProvider } from '../../auth/auth'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setUserLoggedIn } from '../../store/actions/session'
import './styles.css'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string

    if (!username) {
      alert('You must input a name to login')
      return
    }

    await authProvider.signin(username)

    dispatch(setUserLoggedIn({ isLoggedIn: true, user: username }))
    navigate(from, { replace: true })
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h3>Please, fill in the fake auth</h3>
        <p>{`You must log in to view the page at: "${from}"`}</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-form-label">Username:</label>
          <input name="username" type="text" className="login-form-input" placeholder="What' s your name?" />
          <button type="submit" className="login-form-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
