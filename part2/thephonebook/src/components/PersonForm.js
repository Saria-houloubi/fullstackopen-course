import React from 'react'

const PersonForm = ({handelNewNameFormSubmit,newName,newNumber,handelNewNameChange,handelNewNumberChange})=>{
    return(
        <form onSubmit={handelNewNameFormSubmit}>
        <div>
        <div>name: <input value={newName} onChange={handelNewNameChange} /></div>
        <div>number: <input  value={newNumber} onChange={handelNewNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm