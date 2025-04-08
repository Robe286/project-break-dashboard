


const charactersInput = document.getElementById("charactersInput") //Nodo
const btnPassGen = document.getElementById('btnPassGen')
let charactersValue = 0 // Valor numérico del input
    
charactersInput.addEventListener('change', () =>{
    charactersValue = parseInt(charactersInput.value)
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
        return;
    }
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


/*
const randomCharacts = (min, max) => (Math.random() * (min, max) + min)
console.log(randomCharacts( mayusculas.charAt(0), charactersValue))
*/

const randomIndex = Math.floor(Math.random() * mayusculas.length);
console.log(mayusculas.charAt(randomIndex))
//return characters.charAt(randomIndex);

  



function generatePassword () {
        
}
generatePassword()









