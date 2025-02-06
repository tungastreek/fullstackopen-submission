import { useEffect, useState } from "react"

import Filter from './components/Filter'
import countryService from './services/country'
import CountryList from "./components/CountryList"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterText, setFilterText] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value)
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  const handleShowShortList = () => {
    setSelectedCountry(null)
  }

  useEffect(() => {
    countryService.getAll().then((countries) => {
      setCountries(countries)
    })
  }, [])

  const matchedCountries = countries.filter((country) => {
    return country.name.official.toLowerCase().includes(filterText.toLowerCase())
  })

  return (
    <>
      <Filter
        target="countries"
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <CountryList
        countries={matchedCountries}
        selectedCountry={selectedCountry}
        handleShowCountry={handleShowCountry}
        handleShowShortList={handleShowShortList}
      />
    </>
  )
}

export default App
