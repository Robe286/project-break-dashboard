function getClock () {
    
    const getData = new Date();
    const hours = getData.getHours();
    const minutes = getData.getMinutes();
    const seconds = getData.getSeconds();
    
    const formatHours = hours < 10 ? '0' + hours : hours;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    const newTime = `${formatHours}:${formatMinutes}:${formatSeconds}`;
    
    getDate(getData);  
    
    const clockContainer = document.getElementById('clock');
    const tipContainer = document.getElementById('tip');
    const phrase = getTip(hours);
    
    clockContainer.innerHTML = newTime;
    tipContainer.innerHTML = phrase;
    
}

setInterval('getClock()', 1000)
getClock();

function getTip (hours) {
   
    if (hours >= 0 && hours <= 7) {
        return 'Es suficiente por hoy. Ahora toca descansar';
    } else if (hours > 7 && hours <= 12) {
        return 'El sol asoma. Desayuna fuerte y al turrón!';
    } else if (hours > 12 && hours <= 14) {
        return 'El hambre aprieta. ¿Qué vas a comer hoy?';
    } else if (hours >14 && hours <= 16) {
        return '¿Te pesan la barriga y los párpados? Quizás toque reposar';
    } else if (hours > 16 && hours <= 18) {
        return '¿Y ahora que? ¿Te vas a comer la tarde?';
    } else if (hours > 18 && hours <= 22) {
        return 'Enseguida esta aquí la cena. Esto es un no parar';
    } else {
        'Que maravilla de día. Mañana más'
    };
}

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
