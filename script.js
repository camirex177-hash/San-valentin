const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const bgMusic = document.querySelector('#bgMusic');
const photos = document.querySelectorAll('.photo');

let currentPhotoIndex = 0;

// Carrusel automático
function changePhoto() {
    photos[currentPhotoIndex].classList.remove('active');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].classList.add('active');
}
setInterval(changePhoto, 3000);

// Botón "No" que huye
function moverBotonNo() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener('mouseenter', moverBotonNo);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moverBotonNo();
});

// Acción al decir que SÍ
yesBtn.addEventListener('click', () => {
    bgMusic.play();
    alert('¡SABÍA QUE DIRÍAS QUE SÍ! ❤️ Te amo demasiado.');
});

// Activar música al interactuar
document.addEventListener('click', () => {
    bgMusic.play();
}, { once: true });
