import React from 'react'
import ReactDOM from 'react-dom'

//Header element
// takes care of rendering the name of the course
const Header =(props) => {
    return(
        <h1>{props.course}</h1>
    )
}

//Part component
const Part =(props) =>{
    return(
        <p>{props.part} {props.exercises}</p>   
    )
}

//Content element
// renders the parts and their number of exercises 
const Content = (props) =>{
    return (
        <div>
        <Part part={props.part[0]} exercises={props.exercises[0]}/>
        <Part part={props.part[1]} exercises={props.exercises[1]}/>
        <Part part={props.part[2]} exercises={props.exercises[2]}/>
        </div>
    )
}

//Content Total
// renders the total amount of exercises
const Total = (props) =>{
    return (
        <p>Number of exercises {props.number}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course}/>
        <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
        <Total number= {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))