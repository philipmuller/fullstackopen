import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

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
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const selectRandomAnecdote = () => {
    const randomFloat = Math.random() //float between 0.0 and 1.0
    const randomFloatIndex = randomFloat * (anecdotes.length - 0.000000000001) //need to protect against randomFloat being 1.0, causing index out of range
    const randomIntIndex = Math.floor(randomFloatIndex)
    console.log(randomFloat, randomFloatIndex, randomIntIndex)
    setSelected(randomIntIndex)
  }

  const handleVote = () => {
    const nVotes = votes[selected]
    const newVotes = [...votes]
    newVotes[selected] = nVotes + 1
    console.log("Prev: ", nVotes, "To: ", nVotes + 1)
    setVotes(newVotes)
  }

  const mostVotedAnecdote = () => {
    console.log("called most voted", votes)
    let maxVotes = 0
    let maxIndex = 0
    votes.forEach((vote, index) => {
      if (vote > maxVotes) {
        maxVotes = vote
        maxIndex = index
      }
    })
    return anecdotes[maxIndex]
  }

  return (
    <div>
      <Title text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <Button onClick={handleVote} text='Vote' />
      <Button onClick={selectRandomAnecdote} text='Next anecdote' />

      <Title text='Anecdote with most votes' />
      <p>{mostVotedAnecdote()}</p>
    </div>
  )
}

export default App