function activateClock () {
    
    const getDate = new Date()
    const hours = getDate.getHours();
    const minutes = getDate.getMinutes();
    const seconds = getDate.getSeconds();
    
    const formatHours = hours < 10 ? '0' + hours : hours;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    const format
    
    const time = `${formatHours}:${formatMinutes}:${formatSeconds}`
    
    const clock = document.getElementById('clock')
    clock.innerHTML = `<span>${time}</span>`
    
}

//setInterval('activateClock()', 1000)



























/*
// Se podrían meter las frases en variables, depués quizás meter en un array, en un objeto clave/valor y renderizarlo en el dom
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
MESES[getDate.getMonth()]
*/
