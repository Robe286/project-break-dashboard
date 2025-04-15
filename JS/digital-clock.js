const date = new Date()
console.log(date)
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
MESES[date.getMonth()]
console.log(MESES[date.getMonth()])
console.log(date.toLocaleDateString())