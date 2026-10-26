const severityColors = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  High: 'bg-orange-100 text-orange-800',
  Critical: 'bg-red-100 text-red-800',
}

function BugCard({ bug, onStatusChange, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{bug.title}</h3>
        <span className={`text-sm px-2 py-1 rounded ${severityColors[bug.severity]}`}>
          {bug.severity}
        </span>
      </div>

      {bug.description && <p className="text-gray-700">{bug.description}</p>}

      {bug.steps && (
        <div>
          <p className="text-sm font-medium text-gray-500">Steps to reproduce:</p>
          <p className="text-gray-700 whitespace-pre-line">{bug.steps}</p>
        </div>
      )}

      {bug.expected && (
        <div>
          <p className="text-sm font-medium text-gray-500">Expected result:</p>
          <p className="text-gray-700 whitespace-pre-line">{bug.expected}</p>
        </div>
      )}

      {bug.actual && (
        <div>
          <p className="text-sm font-medium text-gray-500">Actual result:</p>
          <p className="text-gray-700 whitespace-pre-line">{bug.actual}</p>
        </div>
      )}

      {bug.environment && (
        <div>
          <p className="text-sm font-medium text-gray-500">Environment:</p>
          <p className="text-gray-700 whitespace-pre-line">{bug.environment}</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <select
          value={bug.status}
          onChange={(e) => onStatusChange(bug.id, e.target.value)}
          className="border rounded p-1 text-sm"
        >
          <option>Open</option>
          <option>In progress</option>
          <option>Resolved</option>
        </select>

        <button
          onClick={() => onDelete(bug.id)}
          className="text-red-600 text-sm hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BugCard
