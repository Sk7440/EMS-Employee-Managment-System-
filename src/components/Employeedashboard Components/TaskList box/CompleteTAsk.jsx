import React from 'react'

function CompleteTAsk({ data }) {
  const completedCount = data?.tasks?.filter((t) => t.completed).length || 0

  return (
    <div className="rounded-2xl border text-emerald-400 border-slate-700/80 bg-slate-800/80   p-5 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Completed</span>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-emerald-600">{completedCount}</span>
      </div>
    </div>
  )
}

export default CompleteTAsk