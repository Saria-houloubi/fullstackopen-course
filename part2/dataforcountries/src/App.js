import React ,{ useState,useEffect} from 'react';
import Axios from 'axios'
import Countery from './components/Countery.js'
import CounteryList from './components/CounteryList.js'
function App() {
  const [countries,setCountries] = useState([])
  const [search,setSearch] = useState('')


  const handelSearchChange = (event) =>{

    setSearch(event.target.value)
  }

  const renderSearchCountries = () =>{ 
    const searchCountries=  countries.filter((c)=>{
      return c.name.toLowerCase().includes(search.toLowerCase())
    })

    if(searchCountries.length > 10){
          return(
            <p>Too many matches, specify another filter</p>
          )
    } else if(searchCountries.length === 1){
      return(
        <Countery name={searchCountries[0].name}
        capital={searchCountries[0].capital}
        population={searchCountries[0].population}
        languages={searchCountries[0].languages}
        flag={searchCountries[0].flag}/>
      )
    }else{
      return(
        searchCountries.map((c,index)=>
        <CounteryList name={c.name} key ={index} onShow={()=>setSearch(c.name)}/>
       )
      )
    }
  }

  const fetchCountryData=()=>{
    Axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((resposne)=>{
      setCountries(resposne.data)
    })
  }
  useEffect(fetchCountryData,[])
  return (
  <div>
    find countries <input value={search} onChange={handelSearchChange}/>
    {renderSearchCountries()}
  </div>
    );
}

export default App;
