import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDasboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [currentUserId, setCurrentUserId] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser)
        setUser(parsed.role)
        setCurrentUserId(parsed.id || null)
      } catch (err) {
        localStorage.removeItem("loggedInUser")
      }
    }
  }, [])

  function handleLogin(email, password) {
    if (email === "admin@company.com" && password === "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      )
      if (employee) {
        setUser("employee")
        setCurrentUserId(employee.id)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", id: employee.id }))
      } else {
        alert("Invalid Credentials")
      }
    }
  }

  const loggedInEmployee = authData?.employees?.find((e) => e.id === currentUserId)

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && loggedInEmployee && (
        <EmployeeDashboard data={loggedInEmployee} />
      )}
    </>
  )
}

export default App