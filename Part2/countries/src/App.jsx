import { useState, useEffect } from "react"
import countriesLibrary from "./services/countriesLibrary"
import SearchBar from "./components/SearchBar"
import ResultsDisplay from "./components/ResultsDisplay"

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const filter = country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  const filteredCountries = countries.filter(filter)

  useEffect(() => {
    countriesLibrary
      .getAll()
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const search = (query) => {
    console.log(query)
    setSearchQuery(query)
  }

  return (
    <div>
      <h1>Country Browser</h1>
      <SearchBar onQueryChange={search} />
      <ResultsDisplay countries={filteredCountries} />
    </div>
  )
}

export default App
