import TooManyCountry from "./TooManyCountry"
import CountryShortList from "./CountryShortList"
import CountryDetails from "./CountryDetails"

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <TooManyCountry />
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <CountryShortList countries={countries} />
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