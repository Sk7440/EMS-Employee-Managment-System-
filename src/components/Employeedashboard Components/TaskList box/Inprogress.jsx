import React from 'react'

function Inprogress({ data }) {
  const activeCount = data?.tasks?.filter((t) => t.active).length || 0

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 text-amber-400 p-5 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Task</span>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-amber-600">{activeCount}</span>
      </div>
    </div>
  )
}

export default Inprogress