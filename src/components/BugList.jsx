import BugCard from './BugCard'

function BugList({ bugs, onStatusChange, onDelete }) {
  if (bugs.length === 0) {
    return <p className="text-gray-500 text-center">No bugs found.</p>
  }

  return (
    <div className="space-y-3">
      {bugs.map((bug) => (
        <BugCard
          key={bug.id}
          bug={bug}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default BugList
