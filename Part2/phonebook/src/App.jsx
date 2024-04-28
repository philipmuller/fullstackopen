import { useState } from 'react'
import PersonInput from './components/PersonInput'

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
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <PersonInput onSubmit={addPerson} />
      <h2>Numbers</h2>
      {persons
      .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => 
      <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App