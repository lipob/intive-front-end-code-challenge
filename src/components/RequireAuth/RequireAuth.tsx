import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props
  const auth = useAuth()
  const location = useLocation()

  console.log('auth', auth)
  // eslint-disable-next-line no-debugger
  debugger

  if (!auth?.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export { RequireAuth }
