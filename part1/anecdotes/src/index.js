import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt =(max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
const Button = (props) => <button onClick={props.onClick} >{props.text}</button>

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [largestVoteIndex,setLargestVoteIndex] = useState(0)
    const [votes,setVotes] = useState(new Array(props.anecdotes.length).fill(0))
    
    const handelSelectionChange = () =>{
      setSelected(getRandomInt(anecdotes.length))
    }

    const handelVotes= ()=>{
        const copy = [...votes]

        copy[selected] += 1   

        setLargestVoteIndex(copy.indexOf(Math.max.apply(null,copy)))

        setVotes(copy)
    }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>{votes[selected]}</div>
      <Button text='vote' onClick={handelVotes}/>
      <Button text='next anecdotes' onClick={handelSelectionChange}/>
      <h1>Anecdote with the most votes</h1>
      <div>{props.anecdotes[largestVoteIndex]}</div>
      <div>has {votes[largestVoteIndex]} votes</div>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)