/* eslint-disable no-debugger */
import React, { ReactNode, useState } from 'react'
import { authProvider } from '../../auth/auth'
import { AuthContext } from '../../context/AuthContext'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  const signin = async (newUser: string, callback: VoidFunction) => {
    try {
      await authProvider.signin(() => {
        callback()
      })

      setUser(newUser)
    } catch (error) {
      console.error(error)
    }
  }

  const signout = async (callback: VoidFunction) => {
    try {
      await authProvider.signout(() => {
        callback()
      })

      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

export default AuthProvider
