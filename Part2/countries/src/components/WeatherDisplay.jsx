import { useState, useEffect } from 'react'
import openWeatherMap from '../services/openWeatherMap'

const WeatherDisplay = ({ name, lat, lon }) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        openWeatherMap
            .getCurrent(lat, lon)
            .then(response => {
                console.log(response.data)
                setWeatherData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
      <div>
        <h4>Weather in {name}</h4>
        {weatherData &&
        <>
        <img src={openWeatherMap.getIconUrl(weatherData.weather[0].icon)} alt={`${name}'s conditions`} width="100" />
        <p>Temperature: {weatherData.main.temp}<br/>Wind: {weatherData.wind.speed}</p>
        </>
        }
        
      </div>
    )
}

export default WeatherDisplay
