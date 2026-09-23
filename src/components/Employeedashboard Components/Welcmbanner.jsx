import React from 'react'

function Welcmbanner({ data }) {
  function logOut() {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
  }

  const pendingCount = data?.tasks?.filter((t) => t.newTask).length || 0

  return (
    <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl bg-indigo-600 p-6 text-white  sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {data?.name}! 👋</h1>
        <p className="mt-1 text-indigo-100">You have {pendingCount} tasks pending for today.</p>
      </div>
      <button
        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-lg font-bold text-white text-sm"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  )
}

export default Welcmbanner