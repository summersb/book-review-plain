import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import type {UserCredential} from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail as updateEmailFirebase,
  updatePassword as updatePasswordFirebase,
  User
} from 'firebase/auth'
import {auth} from '../api/Firebase'

type AuthContextType = {
  currentUser: User | undefined
  signup?: (email: string, password: string) => Promise<UserCredential>
  login?: (email: string, password: string) => Promise<UserCredential>
  logout?: () => Promise<void>
  resetPassword?: (email: string) => Promise<void>
  updateEmail?: (email: string) => Promise<void>
  updatePassword?: (password: string) => Promise<void>
}

const authContextDefaults: AuthContextType = {
  currentUser: undefined,
}

const AuthContext = React.createContext<AuthContextType>(authContextDefaults)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children}: any): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  const signup = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = (): Promise<void> => {
    return auth.signOut()
  }

  const resetPassword = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email)
  }

  const updateEmail = (email: string): Promise<void> => {
    if (currentUser) {
      return updateEmailFirebase(currentUser, email)
    }
    return new Promise((res, rej) => {
        throw new Error("User not authenticate")
      }
    )
  }

  const updatePassword = (password: string): Promise<void> => {
    if (currentUser) {
      return updatePasswordFirebase(currentUser, password)
    }
    return new Promise((res, rej) => {
        throw new Error("User not authenticate")
      }
    )
  }

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    })
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, useAuth}