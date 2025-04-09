
const ciudad = '39.47391, -0.37966'
const APIKey = '187d9adfe7fb4399b08114239250604'
const EndPoint = `https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${ciudad}&aqi=no`
const currentWeather = document.getElementById('currentWeather')

const getData = async () => {
    try {
        const response = await fetch(EndPoint)
        if (!response.ok) {
            throw new Error ('Ha surgido un problema', response.status)
        }
        const weatherData = await response.json()
        const { name, country } = weatherData.location
        const { text, icon } = weatherData.current.condition  // Estado del clima y la imagen
        const { temp_c, humidity, precip_mm, wind_kph } = weatherData.current
        
        currentWeather.innerHTML = `
        <h2>${name} - ${country }</h2>
        <p>${text}</p>
        <img src="https:${icon}" alt="${text}">
        `
        
    }
    catch (error) {
        console.log(error)
    }
    
}
getData()





