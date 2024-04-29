import CountryDisplay from "./CountryDisplay"
import { useState, useEffect } from 'react'

const ManyMatchesDisplay = ( { number } ) => {
    return <p>{`${number} found: too many matches, refine your search`}</p>
}
  
const CountryEntry = ({ country, onShow }) => {
    return (
      <p>
        {country.flag} - {country.name.common} 
        <button onClick={() => onShow(country)}>Show</button>
    </p>
    )
}
  
const ResultsDisplay = ({ countries }) => {
    const [showCountry, setShowCountry] = useState(null)

    useEffect(() => {
      setShowCountry(null)
    }, [countries])

    const handleShow = (country) => {
      console.log('show', country)
      setShowCountry(country)
    }
  
    if (countries.length === 1) {
      return CountryDisplay({ country: countries[0] })
    }
  
    if (countries.length > 10) {
      return ManyMatchesDisplay({ number: countries.length })
    }
  
    return (
      <>
        {countries.map(country => <CountryEntry key={country.name.official} country={country} onShow={handleShow}/>)}
        {showCountry && CountryDisplay({ country: showCountry })}
      </>
    )
}

export default ResultsDisplay