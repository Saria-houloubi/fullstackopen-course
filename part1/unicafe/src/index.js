import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ifError } from 'assert';

//The default header component
const Header = (props) => <h1>{props.text}</h1>
//The default button component
const Button = (props) => <button onClick={props.onClick} >{props.text}</button>
//Text value component
const Statistic   = (props) => <div>{props.text} {props.value} {props.sign}</div>

const TabelRow = (props) => <tr >
                                <td>{props.text}</td>
                                <td>{props.value}</td>
                                <td>{props.sign}</td>
                            </tr>
const Statistics = (props) => {
    const itmes =[];
    if(props.show){
        for(let i = 0 ; i < props.stats.length ; i++){
            const element = props.stats[i];
            itmes.push(<TabelRow  key={i} text={element.text} value={element.value} sign={element.sign} />) 
        }   
        return (
            <table>
                <tbody>
                    {itmes}
                </tbody>
            </table>  
        )
    }
    return (
        <div>
            No feedback given
        </div>
    )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handelGood = () =>{
    setGood(good + 1);
  }
  const handelNeutral = () =>{
    setNeutral(neutral + 1);
  }
  const handelBad = () =>{
    setBad(bad + 1);
  }
  let all = good + bad + neutral + 0
  const stats = [
      {
        text : 'good',
        value : good
      },
      {
        text : 'neutral',
        value : neutral
      },      {
        text : 'bad',
        value : bad
      },
      
      {
        text: 'all',
        value : (good + neutral + bad),
      },
      {
          text:'average',
        value :((good - bad ) / all ),
      },
      {
          text : "posiive",
        value    : ((good) / all) ,
        sign : '%'
    }
]
  return (
    <div>
        <Header text='give feedback'/>
        <Button text='good' onClick={handelGood}/>
        <Button text='natural' onClick={handelNeutral}/>
        <Button text='bad'  onClick={handelBad}/>
        <Header text='statistics'/>
        <Statistics stats= {stats} show = {all != 0}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)