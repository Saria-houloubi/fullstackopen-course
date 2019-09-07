import React from 'react'
const Filter = ({searchValue,handelSearchValueChange})=>{
    return (
        <div>
        Filter shown with <input value={searchValue} onChange={handelSearchValueChange}/>
        </div>
    )
}

export default Filter