import axios from "axios"

const baseUrl = 'http://api.weatherapi.com/v1/current.json'
const api_key = import.meta.env.VITE_WEATHERAPP_API_KEY

const getWeatherByCity = (city) => {
  return axios
    .get(
      baseUrl,
      { params: { key: api_key, q: city } }
    )
    .then(response => response.data)
}

export default { getWeatherByCity }