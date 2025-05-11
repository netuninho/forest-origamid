// Menu Mobile

const btnMobile = document.getElementById('btn-mobile');
const menuMobile = document.getElementById('menu-mobile');

btnMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden')
    menuMobile.classList.toggle('flex')
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.add('hidden')
    menuMobile.classList.remove('flex')
})