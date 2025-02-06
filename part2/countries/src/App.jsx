import { useEffect, useState } from "react"

import Filter from './components/Filter'
import countryService from './services/country'
import CountryList from "./components/CountryList"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterText, setFilterText] = useState('')

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value)
  }

  useEffect(() => {
    countryService.getAll().then((countries) => {
      setCountries(countries)
    })
  }, [])

  const matchedCountries = countries.filter((country) => {
    return country.name.official.toLowerCase().includes(filterText.toLowerCase())
  })

  console.log(matchedCountries)

  return (
    <>
      <Filter
        target="countries"
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <CountryList countries={matchedCountries} />
    </>
  )
}

export default App
