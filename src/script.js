const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

/* typing animation */
var typed = new Typed(".typing",{
    strings:["Tsihkanovich",'Tiskanovich','Tsikhanovich'],
    typespeed:1000,
    BackSpeed:600,
    loop:true
})