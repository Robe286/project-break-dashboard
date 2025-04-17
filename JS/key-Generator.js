const charactersInput = document.getElementById("charactersInput")
const btnPassGen = document.getElementById('btnPassGen')
const placeResult = document.getElementById('result')

const actuator = btnPassGen.addEventListener('click', () => {

    const charactersValue = parseInt(charactersInput.value);
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
        return
    }   

    const password = buildPassword(charactersValue)
    placeResult.innerHTML = `<p>Contraseña Generada: ${password}</p>`
})

function getRandomChar (character) {
    const index = Math.floor(Math.random() * character.length);
    return character.charAt(index);
}

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




