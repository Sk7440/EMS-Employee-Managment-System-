import React from 'react'
import AcceptTask from './TaskListCards/AcceptTask'
import Inprogress from './TaskListCards/Inprogress'
import CompleteTAsk from './TaskListCards/CompleteTAsk'
import NewTask from './TaskListCards/NewTask'

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