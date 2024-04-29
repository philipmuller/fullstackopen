import { useState, useEffect } from 'react'
import PersonInput from './components/PersonInput'
import Filter from './components/Filter'
import ContactsList from './components/ContactsList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
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
      
      axios
        .post('http://localhost:3001/persons', newPerson)
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