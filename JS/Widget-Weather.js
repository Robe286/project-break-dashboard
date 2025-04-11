
const ciudad = '39.47391, -0.37966'
const APIKey = '187d9adfe7fb4399b08114239250604'
const EndPoint = `https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${ciudad}&aqi=no`
const currentWeather = document.getElementById('currentWeather')
const forecastWeather = document.getElementById('forecastWeather')

const getData = async () => {
   
    try {
        const response = await fetch(EndPoint)
        if (!response.ok) {
            throw new Error ('Ha surgido un problema', response.status)
        }
        const weatherData = await response.json()
        currentTemplate(weatherData)
        forecastTemplate(weatherData)
    }
    catch (error) {
        console.log(error)
    }
       
}
getData()


function currentTemplate (weatherData) {
    
    const { name, country } = weatherData.location
    const { text, icon } = weatherData.current.condition
    const { temp_c, humidity, precip_mm, wind_kph } = weatherData.current
    
    currentWeather.innerHTML = `
    <h2>${name} - ${country }</h2>
    <p>${text}</p>
    <div class="icon-temp">
        <img src="https:${icon}" alt="${text}">
        <p>${temp_c}</p>
    </div>
    <ul>
        <li>Viento: ${wind_kph}</li>
        <li>Humedad: ${humidity}</li>
        <li>Precipitaciones: ${precip_mm}</li>
    </ul>
    `
}

function forecastTemplate (weatherData) {
    
    const forecast = weatherData.forecast.forecastday[0].hour
    forecast.forEach((hora) => {
        
        const { time, temp_c } = hora
        const { condition: { icon, text } } = hora
        const arrTime = time.split(' ')
        const onlyHour = arrTime[1]
        forecastWeather.innerHTML += `
        <li>
            <p>${onlyHour}</p>
            <img src="https:${icon}" alt="${text}">
            <p>${temp_c}</p>
        </li>
        `
    })
}
