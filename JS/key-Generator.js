


const charactersInput = document.getElementById("charactersInput")
const btnPassGen = document.getElementById('btnPassGen')
let charactersValue = 0
    
// Eventos de escucha

charactersInput.addEventListener('change', () =>{
    charactersValue = parseInt(charactersInput.value)
    
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
    }
})

btnPassGen.addEventListener('click', () => {
    const password = buildPassword(charactersValue)
    const placeResult = document.getElementById('result')
    placeResult.innerHTML = `<p>Contraseña Generada: ${password}</p>`
})

// Función para generar un carácter aleatorio

function getRandomChar (character) {
    const index = Math.floor(Math.random() * character.length);
    return character.charAt(index);
}

// Construir la contraseña

function buildPassword (charactersValue) {
    
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const minusculas = "abcdefghijklmnopqrstuvwxyz"
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()-_=+"
    
    let password = ""
    
    // Añadir el mínimo de caracteres a password
    
    password += getRandomChar(mayusculas)
    password += getRandomChar(minusculas)
    password += getRandomChar(numeros)
    password += getRandomChar(simbolos)
    
    // Generar el resto de la contraseña de forma aleatoria
    
    for ( let i = password.length ; password.length < charactersValue; i ++ ) {
        if (password.length < charactersValue) {
            password += getRandomChar(mayusculas + minusculas + numeros + simbolos)
        }
    }
    return password
}

// Al clickar en generar sin haber tocado el input, genera una contraseña de 4 caracteres,
// porque aún no se ha introducido un valor en el input y el bucle for no opera con caractersValue
// MIRAR ESTO!!






