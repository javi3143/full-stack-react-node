import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.text}</h1>

const ShowStatistics = (props) => {
  if ((props.valueGood > 0) || (props.valueNeutral > 0) || (props.valueBad > 0)) {
    return (
      <div>
        <Statistic text="good" expression={props.valueGood}/>
        <Statistic text="neutral" expression={props.valueNeutral}/>
        <Statistic text="bad" expression={props.valueBad}/>
        <Statistic text="average" expression={(props.valueGood - props.valueBad) / (props.valueGood + props.valueNeutral + props.valueBad)}/>
        <Statistic text="positive" expression={props.valueGood / (props.valueGood + props.valueNeutral + props.valueBad)}/>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const Statistic = (props) => (
  <p>{props.text} {props.expression}</p>
)
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [valueGood, setValueGood] = useState(0)
  const [valueNeutral, setValueNeutral] = useState(0)
  const [valueBad, setValueBad] = useState(0)

  const setToValueGood = (newValue) => {
    setValueGood(newValue)
  }

  const setToValueNeutral = (newValue) => {
    setValueNeutral(newValue)
  }

  const setToValueBad = (newValue) => {
    setValueBad(newValue)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setToValueGood(valueGood + 1)} text="good"/>
      <Button handleClick={() => setToValueNeutral(valueNeutral + 1)} text="neutral"/>
      <Button handleClick={() => setToValueBad(valueBad + 1)} text="bad"/>
      <Header text="statistics"/>
      <ShowStatistics valueGood={valueGood} valueNeutral={valueNeutral} valueBad={valueBad}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)