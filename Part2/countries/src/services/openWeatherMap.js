import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const iconUrl = "https://openweathermap.org/img/wn/"
const key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY

const getCurrent = (lat, lon) => {
    const fullUrl = `${baseUrl}lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    console.log(fullUrl)
    return axios.get(fullUrl)
}

const getIconUrl = (iconCode) => {
    const fullUrl = `${iconUrl}${iconCode}@2x.png`
    console.log(fullUrl)
    return fullUrl
}

export default { getCurrent, getIconUrl }