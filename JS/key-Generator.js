


const charactersInput = document.getElementById("charactersInput")
const btnPassGen = document.getElementById('btnPassGen')

let charactersValue = 0 // Variable para reasignar el valor numérico del input
    
charactersInput.addEventListener('change', () =>{
    charactersValue = parseInt(charactersInput.value)
    
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
        return;
    }   
    console.log(charactersValue) // si que captura el valor del input en este punto
})

btnPassGen.addEventListener('click', () => {
    const password = buildPassword(charactersValue)
    console.log(password)
    
})

// Función para generar un carácter aleatorio

function getRandomChar (character) {
    const index = Math.floor(Math.random() * character.length);
    return character.charAt(index);
}

function buildPassword (charactersValue) {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const minusculas = "abcdefghijklmnopqrstuvwxyz"
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()-_=+"
    
    let password = "" // Contenedor caracteres
    
    // Añadir el mínimo de caracteres a password
    
    password += getRandomChar(mayusculas) // += Asignación de adición
    password += getRandomChar(minusculas)
    password += getRandomChar(numeros)
    password += getRandomChar(simbolos)
    
    // <--- POSIBLE PROBLEMA EN EL BUCLE --->
    
    for ( let i = password.length ; password.length < charactersValue; i ++ ) {
        if (password.length < charactersValue) {
            password += getRandomChar(mayusculas + minusculas + numeros + simbolos)
        }
    }
    return password
}









