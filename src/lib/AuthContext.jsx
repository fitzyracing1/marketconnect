import React, { createContext, useContext, useState, useEffect } from 'react'
import { base44 } from '@/api/base44Client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const currentUser = await base44.auth.me()
      setUser(currentUser)
    } catch (e) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function login(email, password) {
    const result = await base44.auth.login(email, password)
    setUser(result.user)
    return result
  }

  async function logout() {
    await base44.auth.logout()
    setUser(null)
  }

  async function register(data) {
    const result = await base44.auth.register(data)
    setUser(result.user)
    return result
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
