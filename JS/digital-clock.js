const date = getDate.toLocaleDateString()
// Obtenemos las horas, minutos y segundos. Devuelve un entero

/*
function activateClock () {
    
    
}
setInterval((activateClock()), 1000)
*/

const getDate = new Date()
console.log(getDate)
let hours = getDate.getHours();
let minutes = getDate.getMinutes();
let seconds = getDate.getSeconds();
let time = '';
// Convertimos los valores a dos dígitos
hours = (hours <= 9) ? ('0' + hours) : hours;
minutes = (minutes <= 9) ? ('0' + minutes) : hours;
seconds = (seconds <= 9) ? ('0' + seconds) : seconds;

time = hours + ':' + minutes + ':' + seconds;
console.log(time)


/*
const clock = document.getElementById('clock')
clock.innerHTML = `<span>${time}</span>`
*/

























/*
// Se podrían meter las frases en variables, depués quizás meter en un array, en un objeto clave/valor y renderizarlo en el dom
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
MESES[getDate.getMonth()]
*/
