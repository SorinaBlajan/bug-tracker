function Filters({ statusFilter, severityFilter, onStatusChange, onSeverityChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-3 items-center">
      <span className="font-medium">Filter:</span>

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border rounded p-1"
      >
        <option value="All">All statuses</option>
        <option>Open</option>
        <option>In progress</option>
        <option>Resolved</option>
      </select>

      <select
        value={severityFilter}
        onChange={(e) => onSeverityChange(e.target.value)}
        className="border rounded p-1"
      >
        <option value="All">All severities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
    </div>
  )
}

export default Filters
