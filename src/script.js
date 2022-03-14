const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

/* typing animation */
var typed = new Typed(".typing",{
    strings:["Tsihkanovich",'Tiskanovich','Tsikhanovich'],
    typeSpeed: 40,
    backSpeed: 40,
    loop:true
});