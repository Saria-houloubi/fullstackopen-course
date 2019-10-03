import React, { useState ,useEffect} from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Axios from 'axios'
import personsService from './Services/persons.js'
import Notifcation from './components/Notification.js'
const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('Martin Fowler')
  const [ newNumber, setNewNumber ] = useState('000')
  const [searchValue,setSearchValue] = useState('')
  const [operationMessage,setOperationMessage] = useState(null)
  const [operationMessageType,setOperationMessageType] = useState(null)
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
      if(window.confirm(`${newName} is already added to phonebook,replace the old number with the new one `))
      {
          const per = persons.find(p=>p.name == newName)
          const changePer = {...per,number: newNumber}
          
          personsService
          .updateContact(changePer)
          .then(data => {
            per.number = newNumber
            setNewName('')
            setNewNumber('')
          })
          .catch(error=>{
            setOperationMessage(`Information for ${newName} has been removed from the server`)
            setOperationMessageType(`error`)
            setTimeout(() => {
              setOperationMessage(null)
            }, 5000);

            setPersons(persons.filter(p=>p.name != newName))
          }).finally(()=>{
          
          })
      }
    }
    else{
    const personeObject = {
      name : newName,
      number: newNumber
    }
    personsService
    .addContact(personeObject)
    .then(data => {

      setOperationMessage(`Added ${data.name}`)
      setOperationMessageType(`success`)
      setPersons(persons.concat(data))
      setNewName('')
      setNewNumber('')
      setTimeout(() => {
        setOperationMessage(null)
      }, 5000);
    })
    .catch(error=>{
      alert(`Error with message ${error}`)
    })
  
    }
  }

  const handelDeleteContact =(event) =>{

    const personId = event.target.id
    if(window.confirm(`Delete ${event.target.parentElement.childNodes[0].data}?`)){
     personsService
     .deleteContact(personId)
     .then(data=>{
        setPersons(persons.filter(p=>p.id != personId))
     }).catch(error=>{
       alert(`Error happend while deleteing ${error}`)
     })
    }
  }
  
  const fetchAndFillPersons=()=>{
      personsService
      .getAll()
      .then(contacts=>{
        setPersons(contacts)
      })
  }

  useEffect(fetchAndFillPersons,[])
  return (
    <div>
      <h2>Phonebook</h2>
      <Notifcation message={operationMessage} type={operationMessageType}/>
      <Filter searchValue={searchValue} handelSearchValueChange={handelSearchValueChange}/>
      <h2>Add New</h2>
      <PersonForm newName={newName} newNumber={newNumber} 
      handelNewNameFormSubmit={handelNewNameFormSubmit} 
      handelNewNumberChange={handelNewNumberChange} 
      handelNewNameChange = {handelNewNameChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} OnDeleteClick={handelDeleteContact}/>
    </div>
  )
}

export default App