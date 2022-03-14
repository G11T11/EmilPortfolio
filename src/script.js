const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

/* typing animation */
var typed = new Typed(".typing",{
    strings:["Tsihkanovich",'Tiskanovich','Tsikhanovich'],
    typespeed:10,
    BackSpeed:6,
    loop:true
})