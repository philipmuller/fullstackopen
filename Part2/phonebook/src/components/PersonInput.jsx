import { useState } from 'react'

const PersonInput = ({onSubmit}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
  
    const handleSubmission = (event) => {
      event.preventDefault()

      if ((newName === "")|| (newNumber === "")) {
        alert('Please enter a name and number')
        return
      }
      
      onSubmit({name: newName, number: newNumber})
      setNewName('')
      setNewNumber('')
    }
  
    return (
      <form onSubmit={handleSubmission}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonInput