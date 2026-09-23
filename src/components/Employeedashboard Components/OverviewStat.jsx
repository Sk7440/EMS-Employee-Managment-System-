import React from 'react'
import AcceptTask from './TaskList box/AcceptTask'
import Inprogress from './TaskList box/Inprogress'
import CompleteTAsk from './TaskList box/CompleteTAsk'
import NewTask from './TaskList box/NewTask'

function OverviewStat({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <AcceptTask data={data} />
      <NewTask data={data} />
      <Inprogress data={data} />
      <CompleteTAsk data={data} />
    </div>
  )
}

export default OverviewStat