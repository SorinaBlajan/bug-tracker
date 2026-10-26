import { useState, useEffect } from 'react'
import BugForm from './components/BugForm'
import BugList from './components/BugList'
import Filters from './components/Filters'

function App() {
  const [bugs, setBugs] = useState(() => {
    try {
      const saved = localStorage.getItem('bugs')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [statusFilter, setStatusFilter] = useState('All')
  const [severityFilter, setSeverityFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('bugs', JSON.stringify(bugs))
  }, [bugs])

  const handleAddBug = (bug) => {
    setBugs([bug, ...bugs])
  }

  const handleStatusChange = (id, newStatus) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, status: newStatus } : bug)))
  }

  const handleDelete = (id) => {
    setBugs(bugs.filter((bug) => bug.id !== id))
  }

  const filteredBugs = bugs.filter(
    (bug) =>
      (statusFilter === 'All' || bug.status === statusFilter) &&
      (severityFilter === 'All' || bug.severity === severityFilter),
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-purple-600 text-center">Bug Tracker</h1>
        <BugForm onAddBug={handleAddBug} />
        <Filters
          statusFilter={statusFilter}
          severityFilter={severityFilter}
          onStatusChange={setStatusFilter}
          onSeverityChange={setSeverityFilter}
        />
        <BugList
          bugs={filteredBugs}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
