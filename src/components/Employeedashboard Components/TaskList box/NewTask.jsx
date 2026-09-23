import React from 'react'

function NewTask({ data }) {
  const pendingCount = data?.tasks?.filter((t) => t.newTask).length || 0

  return (
    <div className="rounded-2xl border border-slate-700/80 text-rose-400 bg-slate-800/80 p-5 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pending</span>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-rose-600">{pendingCount}</span>
      </div>
    </div>
  )
}

export default NewTask