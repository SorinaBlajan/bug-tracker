import { useState, useEffect } from 'react'

function BugForm({ onAddBug }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState('')
  const [environment, setEnvironment] = useState('')
  const [expected, setExpected] = useState('')
  const [actual, setActual] = useState('')
  const [severity, setSeverity] = useState('Medium')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (!success) return
    const timer = setTimeout(() => setSuccess(''), 3000)
    return () => clearTimeout(timer)
  }, [success])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      setError('Title is required')
      setSuccess('')
      return
    }
    setError('')

    onAddBug({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      steps: steps.trim(),
      environment: environment.trim(),
      expected: expected.trim(),
      actual: actual.trim(),
      severity,
      status: 'Open',
    })

    setTitle('')
    setDescription('')
    setSteps('')
    setEnvironment('')
    setExpected('')
    setActual('')
    setSeverity('Medium')
    setSuccess('Bug added successfully')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-3">
      <h2 className="text-xl font-semibold">Report a bug</h2>

      <div>
        <input
          type="text"
          placeholder="Title (required)"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (error) setError('')
          }}
          aria-invalid={error ? 'true' : 'false'}
          className={`w-full border rounded p-2 ${error ? 'border-red-500' : ''}`}
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
        rows={2}
      />

      <textarea
        placeholder="Steps to reproduce"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full border rounded p-2"
        rows={3}
      />

      <textarea
        placeholder="Expected result"
        value={expected}
        onChange={(e) => setExpected(e.target.value)}
        className="w-full border rounded p-2"
        rows={2}
      />

      <textarea
        placeholder="Actual result"
        value={actual}
        onChange={(e) => setActual(e.target.value)}
        className="w-full border rounded p-2"
        rows={2}
      />

      <input
        type="text"
        placeholder="Environment (e.g. Chrome 130, Windows 11)"
        value={environment}
        onChange={(e) => setEnvironment(e.target.value)}
        className="w-full border rounded p-2"
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        className="w-full border rounded p-2"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Add bug
      </button>
      {success && (
        <p role="status" className="text-green-600 text-sm">
          {success}
        </p>
      )}
    </form>
  )
}

export default BugForm
