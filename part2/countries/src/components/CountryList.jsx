import TooManyCountries from "./TooManyCountries"
import CountryShortList from "./CountryShortList"
import CountryDetails from "./CountryDetails"

const CountryList = ({ 
  countries,
  selectedCountry,
  handleShowCountry,
  handleShowShortList
}) => {
  if (countries.length > 10) {
    return <TooManyCountries />
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <CountryShortList
        countries={countries}
        selectedCountry={selectedCountry}
        handleShowCountry={handleShowCountry}
        handleShowShortList={handleShowShortList}
      />
    )
  } else if (countries.length === 1) {
    return (
      <CountryDetails country={countries[0]} />
    )
  } else {
    return null
  }
}

export default CountryList