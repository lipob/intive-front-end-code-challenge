import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'

interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props
  const location = useLocation()
  const isLoggedIn = useAppSelector(state => state.session.isLoggedIn)

  // if (!auth.user) {
  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export { RequireAuth }
