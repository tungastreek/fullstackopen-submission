import { useState } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

function App() {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Please input both name and number')
      return
    }
    if (people.map(p => p.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPeople(people.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  const filteredPeople = nameFilter.trim() === ''
    ? people
    : people.filter(person => person.name.toLowerCase().includes(nameFilter.trim().toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h2>Add new contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        handleAddNewPerson={handleAddNewPerson}
      />
      <h2>Numbers</h2>
      <Persons filteredPeople={filteredPeople} />
    </div>
  )
}

export default App
