import { useEffect, useState } from 'react'
import personsService from './services/persons'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

function App() {
  const [people, setPeople] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const fetchPeopleHook = () => {
    personsService
      .getAll()
      .then(response => {
        setPeople(response)
      })
  }

  useEffect(fetchPeopleHook, [])

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Please input both name and number')
      return
    }
    const existingPerson = people.find(p => p.name === newName)
    if (existingPerson) {
      if (
        existingPerson.number !== newNumber
        && window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)
      ) {
        personsService
          .update(existingPerson.id, { name: newName, number: newNumber })
          .then(response => {
            setPeople(people.map(p => p.id === response.id ? response : p))
          })
      }
    } else {
      personsService
        .create({ name: newName, number: newNumber })
        .then(response => {
          setPeople(people.concat(response))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleDeletePerson = (deletedPerson) => {
    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personsService.remove(deletedPerson.id)
        .then(response => {
          setPeople(people.filter(person => person.id !== response.id))
        })
    }
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
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
      <Persons
        filteredPeople={filteredPeople}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App
