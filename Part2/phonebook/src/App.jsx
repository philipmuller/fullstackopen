import { useState } from 'react'
import PersonInput from './components/PersonInput'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '034-2928302' }
  ]) 

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

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonInput onSubmit={addPerson} />
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App