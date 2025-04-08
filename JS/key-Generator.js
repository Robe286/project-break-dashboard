


const charactersInput = document.getElementById("charactersInput") //Nodo
let charactersValue = 0
    
charactersInput.addEventListener('change', () =>{
    charactersValue = parseInt(charactersInput.value)
    if ( charactersValue < 12 || charactersValue > 50) {
        alert("El valor introducido debe estar entre 12 y 50 caracteres.");
        return;
    }     
})
