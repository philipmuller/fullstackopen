import { useState } from 'react'

const PersonInput = ({onSubmit}) => {
    const [newName, setNewName] = useState('')
  
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
    const handleSubmission = (event) => {
      event.preventDefault()
      onSubmit(newName)
      setNewName('')
    }
  
    return (
      <form onSubmit={handleSubmission}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonInput