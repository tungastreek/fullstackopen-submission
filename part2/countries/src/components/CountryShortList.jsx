import CountryDetails from "./CountryDetails"

const CountryShortList = ({
  countries,
  selectedCountry,
  handleShowCountry,
  handleShowShortList
}) => {
  if (selectedCountry === null) {
    return (
      <>
        {countries.map((country) => (
          <div key={country.cca3}>
            <p >{country.name.official}</p>
            <button onClick={() => handleShowCountry(country)}>Show</button>
          </div>
        ))}
      </>
    )
  } else {
    return <CountryDetails
      country={selectedCountry}
      handleShowShortList={handleShowShortList}
      canBackToShortList={true}
    />
  }
}

export default CountryShortList