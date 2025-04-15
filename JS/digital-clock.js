function getClock () {
    
    const getData = new Date();
    const hours = getData.getHours();
    const minutes = getData.getMinutes();
    const seconds = getData.getSeconds();
    
    const formatHours = hours < 10 ? '0' + hours : hours;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    const newTime = `${formatHours}:${formatMinutes}:${formatSeconds}`;
    
    const clockContainer = document.getElementById('clock');
    clockContainer.innerHTML = newTime;
    
    getDate(getData);    
}

setInterval('getClock()', 1000)
getClock();

function getDate (getData) {
    
    const dayMonth = getData.getDate();
    const month = getData.getMonth();
    const year = getData.getFullYear();
    
    const formatDayMonth = dayMonth < 10 ? '0' + dayMonth : dayMonth;
    const formatMonth = month < 10 ? '0' + (month + 1) : month;
    
    const newDate = `${formatDayMonth}/${formatMonth}/${year}`;
    
    const dateContainer = document.getElementById('date');
    dateContainer.innerHTML = newDate;
}   























/*
// Se podrían meter las frases en variables, depués quizás meter en un array, en un objeto clave/valor y renderizarlo en el dom
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
MESES[getDate.getMonth()]
*/
