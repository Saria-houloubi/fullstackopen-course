import React, { useState } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('Martin Fowler')
  const [ newNumber, setNewNumber ] = useState('000')
  const [searchValue,setSearchValue] = useState('')

  const handelSearchValueChange=(event)=>{
    setSearchValue(event.target.value)
  }

  const handelNewNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const handelNewNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }
  
  const handelNewNameFormSubmit = (event) =>{
    event.preventDefault()

    if(
      persons.some((item)=>
      item.name === newName
    )){
      alert(`${newName} is already added to phonebook`)}
    else{
    const personeObject = {
      name : newName,
      number: newNumber
    }
    setPersons(persons.concat(personeObject))
    setNewName('')
    setNewNumber('')
  
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue} handelSearchValueChange={handelSearchValueChange}/>
      <h2>Add New</h2>
      <PersonForm newName={newName} newNumber={newNumber} 
      handelNewNameFormSubmit={handelNewNameFormSubmit} 
      handelNewNumberChange={handelNewNumberChange} 
      handelNewNameChange = {handelNewNameChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue}/>
    </div>
  )
}

export default App