import React from 'react'
import ReactDOM from 'react-dom'

//Header element
// takes care of rendering the name of the course
const Header =(props) => {
    return(
        <h1>{props.course.name}</h1>
    )
}

//Part component
const Part =(props) =>{
    return(
        <p>{props.part.name} {props.part.exercises}</p>   
    )
}

//Content element
// renders the parts and their number of exercises 
const Content = (props) =>{
    return (
        <div>
        <Part part={props.course.parts[0]}/>
        <Part part={props.course.parts[1]}/>
        <Part part={props.course.parts[2]}/>
        </div>
    )
}

//Total element
// renders the total amount of exercises
const Total = (props) =>{
    return (
        <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    return (
    <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course= {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))