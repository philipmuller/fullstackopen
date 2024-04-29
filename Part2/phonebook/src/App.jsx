import { useState, useEffect } from 'react'
import PersonInput from './components/PersonInput'
import Filter from './components/Filter'
import ContactsList from './components/ContactsList'
import phonebook from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    phonebook
      .getAll()
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const displayNotification = (message) => {
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }

  const addPerson = ({name, number}) => {
    const existingContact = persons.find(person => person.name === name)
    if (existingContact !== undefined) {
      if (!window.confirm(`${name} is already in the phonebook. Would you like to update their number?`)) {
        return
      }

      phonebook
        .update(existingContact.id, {...existingContact, number: number})
        .then(response => {
          console.log(response.data)
          setPersons(persons.map(person => person.id !== existingContact.id ? person : response.data))
          displayNotification(`Updated ${name}!`)
        })
        .catch(error => {
          alert(`An error occured ${error}`)
        })
    } else {
      const newPerson = { name, number }

      phonebook
        .create(newPerson)
        .then(response => {
          console.log(response.data)
          setPersons(persons.concat(response.data))
          displayNotification(`Added ${name}!`)
        })
        .catch(error => {
          alert(`An error occured ${error}`)
        })
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletion = (id) => {
    phonebook
    .deleteEntry(id)
    .then(response => {
      console.log(response.data)
      setPersons(persons.filter(person => person.id !== id))
    })
    .catch(error => {
      alert(`Entry with id ${id} was not found on the server. ${error}`)
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonInput onSubmit={addPerson} />
      <h2>Numbers</h2>
      <ContactsList persons={persons} filter={filter} onDelete={handleDeletion}/>
    </div>
  )
}

export default App