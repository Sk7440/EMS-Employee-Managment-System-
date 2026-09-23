import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function CreateTaskform() {
  const authData = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assigneeId, setAssigneeId] = useState('')
  const [priority, setPriority] = useState('Medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!assigneeId) {
      alert("Please select an employee.")
      return
    }

    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      priority,
      active: true,
      newTask: true,
      completed: false,
      failed: false
    }

    const updatedEmployees = authData.employees.map((emp) => {
      if (emp.id === assigneeId) {
        return { ...emp, tasks: [...emp.tasks, newTaskObj] }
      }
      return emp
    })

    authData.updateEmployees(updatedEmployees)
    alert("Task assigned successfully!")

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssigneeId('')
    setPriority('Medium')
  }

  return (
    <section className="bg-slate-800/80 backdrop-blur border border-slate-700/60 p-6 rounded-2xl shadow-xl">
      <div className="border-b border-slate-700/60 pb-4 mb-5">
        <h2 className="text-lg font-bold text-white tracking-tight">Assign Task</h2>
        <p className="text-xs text-slate-400 mt-0.5">Delegate a new task to team members.</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Task Title
          </label>
          <input
            type="text"
            required
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="e.g. Optimize Database Indexes"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Assignee
          </label>
          <select
            required
            value={assigneeId}
            onChange={(e) => setAssigneeId(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          >
            <option value="">Select Employee...</option>
            {authData?.employees?.map((emp) => (
              <option key={emp.id} value={emp.id} className="bg-slate-900 text-white">
                {emp.name} ({emp.designation})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            >
              <option value="Low" className="bg-slate-900">Low</option>
              <option value="Medium" className="bg-slate-900">Medium</option>
              <option value="High" className="bg-slate-900">High</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Due Date
            </label>
            <input
              type="date"
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            Description
          </label>
          <textarea
            rows="3"
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Provide task specifics..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition duration-150"
        >
          Assign Task
        </button>
      </form>
    </section>
  )
}

export default CreateTaskform