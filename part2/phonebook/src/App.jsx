import { useEffect, useState } from 'react'
import personsService from './services/persons'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

function App() {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notificationSetting, setNotificationSetting] = useState({ message: null, isError: false })

  useEffect(() => {
    personsService.getAll().then(setPeople)
  }, [])

  const showNotification = (message, isError = false) => {
    setNotificationSetting({ message, isError })
    setTimeout(() => {
      setNotificationSetting({ message: null, isError: false })
    }, 5000)
  }

  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const createPerson = () => {
    personsService
      .create({ name: newName, number: newNumber })
      .then(response => {
        setPeople(people.concat(response))
        showNotification(`${response.name} created`)
        resetForm()
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        showNotification(`Cannot added ${newName} due to server error: ${errorMsg}`, true)
      })
  }

  const updatePerson = (existingPerson) => {
    if (
      existingPerson.number !== newNumber
      && window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)
    ) {
      personsService
        .update(existingPerson.id, { name: newName, number: newNumber })
        .then(response => {
          setPeople(people.map(p => p.id === response.id ? response : p))
          showNotification(`${response.name} updated`)
          resetForm()
        })
        .catch((error) => {
          const errorMsg = error.response.data.error;
          showNotification(`Cannot updated ${existingPerson.name} due to server error: ${errorMsg}`, true)
        })
    }
  }

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '' || newNumber.trim() === '') {
      showNotification('Please input both name and number', true)
      return
    }
    const existingPerson = people.find(p => p.name === newName)
    existingPerson ? updatePerson(existingPerson) : createPerson()
  }

  const handleDeletePerson = (deletedPerson) => {
    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personsService.remove(deletedPerson.id)
        .then(() => {
          setPeople(people.filter(person => person.id !== deletedPerson.id))
          showNotification(`${deletedPerson.name} deleted`)
        })
        .catch(() => {
          showNotification(`${deletedPerson.name} has already been removed from server`, true)
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
      <h1>Phonebook</h1>
      <Notification {...notificationSetting} />
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h2>Add a new contact</h2>
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

