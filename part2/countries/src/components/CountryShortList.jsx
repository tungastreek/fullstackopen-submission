const CountryShortList = ({ countries }) => {
  return (
    <ol>
      {countries.map((country) => (
        <li key={country.cca3}>{country.name.official}</li>
      ))}
    </ol>
  )
}

export default CountryShortList