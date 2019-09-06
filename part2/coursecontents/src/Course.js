import React from 'react'
import ReactDOM from 'react-dom'

//Header element
// takes care of rendering the name of the course
const Header =({title}) => {
    return(
        <h1>{title}</h1>
    )
}

//Part component
const Part =({part}) =>{
    return(
        <p >{part.name} {part.exercises}</p>   
    )
}

//Content element
// renders the parts and their number of exercises 
const Content = ({parts}) =>{
    return (
        <div>
        {parts.map((part)=> <Part key={part.id} part={part}/>)}
        <Total parts={parts}/>
        </div>
    )
}

//Total element
// renders the total amount of exercises
const Total = ({parts}) =>{
    return (
        <p><b>Total of {parts.reduce((sum,part) => sum += part.exercises ,0)} exercises</b></p>
    )
}
//Course component
// renders the the course header and its parts
const Course = ({course}) =>{
    return (
        <div>
        <Header title={course.name} />
        <Content parts = {course.parts} />
        </div>
        )
}

export default Course