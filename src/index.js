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

// Video
const video = document.getElementById('video');
const temperatura = document.getElementById('temperatura');
const tempo = document.getElementById('tempo');
const dia = document.getElementById('dia');

const random = Math.floor(Math.random() * 10) + 20;
temperatura.innerText = `${random}°`;
tempo.innerText = random < 25 ? `🌧️ ${random + 5}%` : '⛅';

const date = new Date();
dia.innerText = date.toLocaleDateString('pt-BR', {
    weekday: 'long'
}).replace('-feira', '');

video.src = random < 25 ? "./img/video_chuva.mp4" : "./img/video_sol.mp4"