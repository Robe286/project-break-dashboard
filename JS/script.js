const body = document.body
const images = [
    "./images/amazing.jpg",
    "./images/bangkokSky.jpg",
    "./images/bangkokThunder.jpg",
    "./images/chiangMai.jpg",
    "./images/curious.jpg",
    "./images/doiIthanon.jpg",
    "./images/elephantsTemple.jpg",
    "./images/garden.jpg",
    "./images/japan.jpg",
    "./images/japanFood.jpg",
    "./images/japanrestaurant.jpg",
    "./images/kohPhiPhi.jpg",
    "./images/newyork.jpg",
    "./images/phuket.jpg",
    "./images/ricegardens.jpg",
    "./images/royalTemple.jpg",
    "./images/street.jpg",
    "./images/temple.jpg",
    "./images/thaiBeach.jpg",
    "./images/thaiBoat.jpg",
    "./images/thaiIslands.jpg",
    "./images/thaiMarket.jpg",
    "./images/thaiStreet.jpg",
]

const randomBackground = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    refreshBackground = images[randomNumber];
    body.style.backgroundImage = `url(${refreshBackground})`;
}

setInterval(() => {
    randomBackground()
}, 15000)

randomBackground()