


const charactersInput = document.getElementById("charactersInput") //Nodo
const btnPassGen = document.getElementById('btnPassGen')
let charactersValue = 0 // Valor numérico del input
    
charactersInput.addEventListener('change', () =>{
    charactersValue = parseInt(charactersInput.value)
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
        return;
    }
    console.log(charactersValue)
})

/*
btnPassGen.addEventListener('click', () => {
    generatePassword()
    
})
*/


/*
- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres
- Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
- Usa bucles y condicionales
- Math.random() Para generar aleatoriedad

*/

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"

let password = "" // Contenedor caracteres

password += getRandomChar(mayusculas) // += Asignación de adición
password += getRandomChar(minusculas)
password += getRandomChar(numeros)
password += getRandomChar(simbolos)

function getRandomChar (character) {
    const randomIndex = Math.floor(Math.random() * character.length);
    return character.charAt(randomIndex);
}

console.log(password)


for ( i = password[4] ; password.length < charactersValue; i ++ ) {
    if (password.length < 12) {
        password += getRandomChar(mayusculas + minusculas + numeros + simbolos)
        console.log(password)

    }
   /*
    if (password.length < charactersValue) {
        password += getRandomChar(mayusculas)
    }
    console.log(password)
    */

}

function addRestPassword () {



}
addRestPassword()




function generatePassword () {
        
}
generatePassword()









