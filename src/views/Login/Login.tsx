/* eslint-disable no-debugger */
import React, { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    debugger
    auth?.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <p>You must log in to view the page at {from}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{' '}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
