import React from 'react'


const getNames = (persons,searchValue,OnDeleteClick)=>{
    return(
  persons.filter((p)=>p.name.toLowerCase().includes(searchValue)).map((p,index)=>
        <p key={index}>{p.name} {p.number} <button onClick={OnDeleteClick} id={p.id}>Delete</button></p>
       )
    )
  }

const Persons= ({persons,searchValue,OnDeleteClick}) =>{
    return(
        getNames(persons,searchValue,OnDeleteClick)
    )
}



export default Persons