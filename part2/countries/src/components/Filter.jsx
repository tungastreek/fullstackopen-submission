const Filter = ({ target, filterText, handleFilterTextChange }) => {
  const inputName = `filter-${target.toLowerCase()}`
  const inputLabel = `Find ${target}: `
  return (
    <div>
      <label htmlFor={inputName}>{inputLabel}: </label>
      <input name={inputName} type="text" value={filterText} onChange={handleFilterTextChange}/>
    </div>
  )
}

export default Filter