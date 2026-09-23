import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function TaskList({ ele, employeeId, taskIndex }) {
  const authData = useContext(AuthContext)

  const handleSubmitTask = () => {
    if (!authData?.employees) return

    const updatedEmployees = authData.employees.map((emp) => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: true,
              failed: false
            }
          }
          return task
        })
        return { ...emp, tasks: updatedTasks }
      }
      return emp
    })

    authData.updateEmployees(updatedEmployees)
  }

  const priorityStyles = {
    High: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    Medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  }

  return (
    <div className={`relative flex flex-col justify-between rounded-2xl border p-5 transition-all shadow-sm ${
      ele.completed
        ? 'bg-slate-800/40 border-slate-700/40 opacity-70'
        : 'bg-slate-800/90 border-slate-700 hover:border-indigo-500/50 shadow-indigo-950/20'
    }`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border ${priorityStyles[ele.priority] || priorityStyles.Medium}`}>
            {ele.priority} Priority
          </span>
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            📅 {ele.taskDate}
          </span>
        </div>

        <h3 className={`font-semibold text-base mb-1 ${ele.completed ? 'line-through text-slate-400' : 'text-white'}`}>
          {ele.taskTitle}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed">
          {ele.taskDescription}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
        <div>
          {ele.completed && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
              ✓ Completed
            </span>
          )}
          {ele.active && !ele.completed && (
            <span className="text-xs font-medium text-amber-400">In Progress</span>
          )}
        </div>

        {!ele.completed && (
          <button
            onClick={handleSubmitTask}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md hover:bg-emerald-500 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Submit Task
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskList