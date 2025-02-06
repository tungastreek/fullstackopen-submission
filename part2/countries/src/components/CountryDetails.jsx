const CountryDetails = ({ country }) => {
  const langguageKeys = Object.keys(country.languages)
  return(
    <div>
      <h1>{country.name.common}</h1>
      <h3>Capital: {country.capital}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Languages</h3>
      <ul>
        {langguageKeys.map((langguageKey) => (
          <li key={langguageKey}>{country.languages[langguageKey]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} height="100" />
    </div>
  )
}

export default CountryDetails