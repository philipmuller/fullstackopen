import { useState } from 'react'
import PersonInput from './components/PersonInput'
import Filter from './components/Filter'
import ContactsList from './components/ContactsList'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '034-2928302' }
  ])
  const [filter, setFilter] = useState('')

  const addPerson = ({name, number}) => {
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already in the phonebook`)
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: name,
        number: number
      }
      setPersons(persons.concat(newPerson))
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