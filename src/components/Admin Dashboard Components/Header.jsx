import React from 'react'

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Admin Operations Center</h1>
        <p className="text-sm text-slate-400 mt-1">Assign tasks and track workforce progress across the team.</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold px-3 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
          Super Admin Privileges
        </span>
      </div>
    </header>
  )
}

export default Header