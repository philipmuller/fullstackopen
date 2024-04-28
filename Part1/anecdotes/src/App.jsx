import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const selectRandomAnecdote = () => {
    const randomFloat = Math.random() //float between 0.0 and 1.0
    const randomFloatIndex = randomFloat * (anecdotes.length - 0.000000000001) //need to protect against randomFloat being 1.0, causing index out of range
    const randomIntIndex = Math.floor(randomFloatIndex)
    console.log(randomFloat, randomFloatIndex, randomIntIndex)
    setSelected(randomIntIndex)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button onClick={selectRandomAnecdote} text='Next anecdote' />
    </div>
  )
}

export default App