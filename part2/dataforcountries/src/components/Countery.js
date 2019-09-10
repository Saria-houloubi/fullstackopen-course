import React,{useState,useEffect} from 'react'
import Axios from 'axios'

const weatherAccessKey = "3a9ea897ed923b549fd48f8d3cd2f740"
const Countery = (({name,capital,population,languages,flag})=>{
    const [weather,setWeather] = useState()
    
    const getWeather=()=>{
        Axios
        .get(`http://api.weatherstack.com/current?access_key=${weatherAccessKey}&query=${name}`)
        .then(response=>{
            setWeather(response.data)
        })
    }
    const renderWeather = () =>{
        if(weather !== undefined){
            return(
                <div>
                    <p><b>temperature:</b> {weather.current.temperature} Celsius</p>
                    <img width='35opx' src={weather.current.weather_icons[0]}  />
                   <p> <b>wind:</b> {weather.current.wind_speed} kph direction  {weather.current.wind_dir}</p>
                </div>
            )
        }
        return(
            <p>No weather information!</p>
            )
    }
    useEffect(getWeather,[])
    return(
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>population {population}</p>

            <h1>languages</h1>
            <ul>
                {languages.map(l=><li key={l.name}>{l.name}</li>)}
            </ul>
            <img src={flag} width='150px' alt={`${name}-flag`} />
            <h1>Weather in {capital}</h1>
            {renderWeather()}
        </div>
    )
})

export default Countery