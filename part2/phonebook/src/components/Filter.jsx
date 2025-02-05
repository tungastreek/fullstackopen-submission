const Filter = ({ nameFilter, handleNameFilterChange }) => {
  return (
    <div>
      <label htmlFor="name-filter">Filter shown with</label>
      <input type="text" name="name-filter" value={nameFilter} onChange={handleNameFilterChange} />
    </div>
  )
}

export default Filter