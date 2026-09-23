import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] })

  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage()
    }
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  const updateEmployees = (updatedEmployees) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
  }

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider