import { useState } from 'react'

const randomNumber = (lessThan) => {
  return Math.floor(Math.random() * lessThan)
}

const indexOfMax = (values) => {
  let maxIndex = 0
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > values[maxIndex]) {
      maxIndex = i
    }
  }
  return maxIndex
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

  const [selected, setSelected] = useState(randomNumber(anecdotes.length))
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [maxIndex, setMaxIndex] = useState(indexOfMax(votes))

  const nextButtonHandler = () => {
    setSelected(randomNumber(anecdotes.length))
  }

  const voteButtonHandler = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    setMaxIndex(indexOfMax(newVotes))
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </div>
      <div>
        <button onClick={voteButtonHandler}>Vote</button>
        <button onClick={nextButtonHandler}>Next Anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most vote</h2>
        <p>{anecdotes[maxIndex]}</p>
        <p>has {votes[maxIndex]} votes</p>
      </div>
    </>
  )
}

export default App
