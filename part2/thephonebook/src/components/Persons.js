import React from 'react'


const getNames = (persons,searchValue)=>{
    return(
      persons.filter((p)=>p.name.toLowerCase().includes(searchValue)).map((p,index)=><p key={index}>{p.name} {p.number}</p>)
    )
  }

const Persons= ({persons,searchValue}) =>{
    return(
        getNames(persons,searchValue)
    )
}



export default Persons