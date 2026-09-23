import React from 'react'

function AcceptTask({ data }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 p-5 shadow-lg">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Assigned</span>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-white">{data?.tasks?.length || 0}</span>
      </div>
    </div>
  )
}

export default AcceptTask