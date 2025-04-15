const getDate = new Date()
console.log(getDate)
// Se podrían meter las frases en variables, depués quizás meter en un array, en un objeto clave/valor y renderizarlo en el dom
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
MESES[getDate.getMonth()]
console.log(MESES[getDate.getMonth()])
console.log(getDate.toLocaleDateString())
console.log(getDate.toLocaleTimeString())

const date = getDate.toLocaleDateString()
const time = getDate.toLocaleTimeString()
console.log(date)
console.log(time)