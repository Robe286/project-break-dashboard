const inputTitle = document.getElementById('inputTitle');
const inputURL = document.getElementById('inputURL');
const addBtn = document.getElementById('addBtn');
const listURL = document.getElementById('list-url')

const saveLinks = JSON.parse(localStorage.getItem('links')) || [];

addBtn.addEventListener('click', () =>{
    saveInStorage()
    showLinks(saveLinks)
})

showLinks(saveLinks)

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
}

function showLinks (saveLinks) {
    listURL.innerHTML = ''; 
    saveLinks.forEach((link, index) =>{
        listURL.innerHTML += `
        <li>
        <a href='${link.url}' target='_blank'>${link.title}</a>
        <button class='btn-delete' data-index='${index}'>x</button>
        </li>
        `;
    })
}

listURL.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-delete')) {
        const index = e.target.dataset.index;
        saveLinks.splice(index, 1);
        showLinks(saveLinks); 
    }
})



