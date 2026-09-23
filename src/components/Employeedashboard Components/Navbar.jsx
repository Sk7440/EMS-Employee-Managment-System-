import React from 'react'

export const Navbar = ({ data }) => {
  const getInitials = (name) => {
    if (!name) return 'U'
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <nav className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b text-white bg-slate-800/80 px-6 shadow-sm mb-6 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-md shadow-indigo-200">
          {getInitials(data?.name)}
        </div>
        <span className="text-lg font-bold text-white">TaskSpace</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="text-right md:block">
            <p className="text-sm font-semibold text-white">{data?.name}</p>
            <p className="text-xs text-white">{data?.designation}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}