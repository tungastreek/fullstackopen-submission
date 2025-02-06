const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return null
  }
  return (
    <>
      <h3>Weather in {weather.location.name}</h3>
      <p>Temparature {weather.current.temp_c} Celcius</p>
      <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.txt} height="80" />
      <p>Wind {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
    </>
  )
}

export default WeatherInfo