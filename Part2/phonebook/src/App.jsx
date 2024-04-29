import { useState, useEffect } from 'react'
import PersonInput from './components/PersonInput'
import Filter from './components/Filter'
import ContactsList from './components/ContactsList'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebook
      .getAll()
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const addPerson = ({name, number}) => {
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already in the phonebook`)
    } else {
      const newPerson = {
        name: name,
        number: number
      }

      phonebook
        .create(newPerson)
        .then(response => {
          console.log(response.data)
          setPersons(persons.concat(response.data))
        })
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonInput onSubmit={addPerson} />
      <h2>Numbers</h2>
      <ContactsList persons={persons} filter={filter} />
    </div>
  )
}

export default App