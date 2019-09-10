import React from 'react'
const CountryList = ({name,onShow})=>{

    return(
        <div>
        {name} <button onClick={onShow}>Show</button>
        </div>
    );
}

export default CountryList