import React, { ReactNode, useState } from 'react'
import { authProvider } from '../../auth/auth'
import { AuthContext } from '../../context/AuthContext'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  const signin = (newUser: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

export default AuthProvider
