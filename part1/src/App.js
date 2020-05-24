import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Language from './components/Language'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([''])
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const countryToShow = 
  showAll
  ? countries
  : countries.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setShowAll(false)
  }

  if (countryToShow.length > 10) {
    return (
      <div>
        <div>
            find countries: <input value={newFilter}
            onChange={handleFilter}/>
        </div>
        <p>Too many matches, specify another filter</p>
    </div>
    )
  } else if (countryToShow.length === 1) {

    return (
      <div>
        <div>
            find countries: <input value={newFilter}
            onChange={handleFilter}/>
        </div>
        <h1>{countryToShow[0].name}</h1>
        <p>capital {countryToShow[0].capital}</p>
        <p>population {countryToShow[0].population}</p>

        {/* <h1>languages</h1>
        {countryToShow.map(c => c.languages).map(l => 
          <Language language={l} />
        )} */}

        <img width="200" src={countryToShow[0].flag}/>
      </div>
    )
  }
  return (
    <div>
      <div>
          find countries: <input value={newFilter}
          onChange={handleFilter}/>
      </div>
      {countryToShow.map(p => 
          <Country key={p.name} country={p} />
      )}
    </div>
  )
}

export default App
