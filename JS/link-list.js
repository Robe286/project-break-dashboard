const inputTitle = document.getElementById('inputTitle');
const inputURL = document.getElementById('inputURL');
const addBtn = document.getElementById('addBtn');
const listURL = document.getElementById('listURL')

const saveLinks = JSON.parse(localStorage.getItem('links')) || [];

function saveInStorage () {
    const title = inputTitle.value;
    const url = inputURL.value;

    if (title && url) {
        saveLinks.push({ title, url });
        localStorage.setItem('links', JSON.stringify(saveLinks));
    }
    else {
        alert("Debes rellenar los dos campos");
        return;
    }
    return saveLinks;
}

function showLinks (saveLinks) { // Mostrar los links en la página
    
    listURL.innerHTML = '';
    saveLinks.forEach((link) =>{
        listURL.innerHTML += `
        <li>
            <a href='${link.url}' target='_blank'>${link.title}</a>
            <button>X</button>
        </li>
        `;
    })
}


addBtn.addEventListener('click', () =>{
    saveInStorage()
    showLinks(saveLinks)

})

showLinks(saveLinks)

//localStorage.setItem(`${title}`, `https://${url}`)








/*
addBtn.addEventListener('click', () =>{
    let title = inputTitle.value
    let url = inputURL.value

    if (!title || !url) {
        alert("Debes rellenar los dos campos para continuar");
        return;
    }
    saveListToStorage(title, url)
    renderLinkToDOM(title, url)
})
//localStorage.clear()
function saveListToStorage (title, url) {
    localStorage.setItem(`${title}`, `https://${url}`)
}

function loadListFromStorage () {

}
loadListFromStorage ()


function renderLinkToDOM (title, url) { // Mostrar los links en la página
    listURL.innerHTML = ''
    listURL.innerHTML += `
    <li>
        <a href='https://${url}' target='_blank'>${title}</a>
        <button id='linkDelete'>x</button>
    </li>
    `
}
*/



