import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import type { LoginResponse } from '../types/Auth'

interface AuthContextValue {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('accessToken'))
  )

  async function login(username: string, password: string) {
    const response = await api.post<LoginResponse>('/auth/login', {
      username,
      password,
    })

    localStorage.setItem('accessToken', response.data.accessToken)

    setIsAuthenticated(true)
  }

  function logout() {
    localStorage.removeItem('accessToken')
    setIsAuthenticated(false)
  }

  const value: AuthContextValue = {
    isAuthenticated,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }

  return context
}