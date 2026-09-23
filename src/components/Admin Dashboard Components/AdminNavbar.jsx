import React from 'react'

function AdminNavbar() {
  function logOut() {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
  }

  return (
    <aside className="w-full lg:w-64 bg-slate-900 text-slate-300 shrink-0">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <div className="w-full flex items-center justify-between gap-3">
          <span className="font-bold text-white text-lg tracking-wide">AdminPortal</span>
          <button
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg font-bold text-white text-sm"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AdminNavbar