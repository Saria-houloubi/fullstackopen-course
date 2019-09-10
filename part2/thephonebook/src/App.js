import React, { useState ,useEffect} from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
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
  
  const fetchAndFillPersons=()=>{
      Axios
      .get('http://localhost:3001/persons')
      .then((response)=>{
        setPersons(response.data)
      })
  }

  useEffect(fetchAndFillPersons,[])
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