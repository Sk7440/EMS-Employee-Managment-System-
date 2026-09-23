import React from 'react'
import { Navbar } from '../Employeedashboard Components/Navbar'
import TaskList from '../Employeedashboard Components/TaskList'
import Welcmbanner from '../Employeedashboard Components/Welcmbanner'
import OverviewStat from '../Employeedashboard Components/OverviewStat'

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 lg:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <Navbar data={data} />
        <Welcmbanner data={data} />
        <OverviewStat data={data} />

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white tracking-tight">Assigned Tasks</h2>
            <span className="text-xs text-slate-400 font-medium">
              {data?.tasks?.filter(t => !t.completed).length} active remaining
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.tasks?.map((ele, idx) => (
              <TaskList
                key={idx}
                ele={ele}
                employeeId={data.id}
                taskIndex={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard