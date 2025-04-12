// Recoger el titulo introducido en el input

const inputTitle = document.getElementById('inputTitle');
const inputURL = document.getElementById('inputURL');
const addBtn = document.getElementById('addBtn');
const listURL = document.getElementById('listURL')


addBtn.addEventListener('click', () =>{
    let title = inputTitle.value
    let url = inputURL.value
    //localStorage.setItem(`${title}`, `https://${url}`)

    listURL.innerHTML += `
    <li>
        <a href='https://${url}' target='_blank'>${title}</a>
    </li>
    `


})






/*
function addURL () {

}
addURL()
*/

/*
const inputEvent = inputTitle.addEventListener('change', () => {
    title = inputTitle.value
    console.log(title)
})
*/