const PersonForm = (props) => {
  const {
    newName,
    newNumber,
    handleNewNameChange,
    handleNewNumberChange,
    handleAddNewPerson
  } = props

  return (
    <form onSubmit={handleAddNewPerson}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={newName} onChange={handleNewNameChange} />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input type="text" name="number" value={newNumber} onChange={handleNewNumberChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default PersonForm