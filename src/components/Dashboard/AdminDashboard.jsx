import React, { useContext } from 'react'
import AdminNavbar from '../Admin Dashboard Components/AdminNavbar'
import Header from '../Admin Dashboard Components/Header'
import CreateTaskform from '../Admin Dashboard Components/CreateTaskform'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = () => {
  const authData = useContext(AuthContext)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-900 text-slate-100 font-sans">
      <AdminNavbar />

      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
        <Header />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="xl:col-span-5">
            <CreateTaskform />
          </div>

          {/* Right Column: Employees Overview Table */}
          <div className="xl:col-span-7 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Team Overview</h3>
                <p className="text-xs text-slate-400">All registered employees and live task metrics.</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
                {authData?.employees?.length || 0} Members
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-3 px-3">Employee</th>
                    <th className="pb-3 px-2 text-center text-rose-400">New</th>
                    <th className="pb-3 px-2 text-center text-amber-400">Active</th>
                    <th className="pb-3 px-2 text-center text-emerald-400">Done</th>
                    <th className="pb-3 px-2 text-center text-slate-400">Failed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/40">
                  {authData?.employees?.map((emp) => {
                    const newCount = emp.tasks.filter((t) => t.newTask).length
                    const activeCount = emp.tasks.filter((t) => t.active).length
                    const doneCount = emp.tasks.filter((t) => t.completed).length
                    const failedCount = emp.tasks.filter((t) => t.failed).length

                    return (
                      <tr key={emp.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="py-3 px-3">
                          <p className="font-semibold text-white">{emp.name}</p>
                          <p className="text-xs text-slate-400">{emp.designation}</p>
                        </td>
                        <td className="py-3 px-2 text-center font-bold text-rose-400">{newCount}</td>
                        <td className="py-3 px-2 text-center font-bold text-amber-400">{activeCount}</td>
                        <td className="py-3 px-2 text-center font-bold text-emerald-400">{doneCount}</td>
                        <td className="py-3 px-2 text-center font-bold text-slate-500">{failedCount}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard