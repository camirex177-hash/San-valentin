const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const bgMusic = document.querySelector('#bgMusic');
const photos = document.querySelectorAll('.photo');

let currentPhotoIndex = 0;

// --- 1. Cambio automático de fotos ---
function changePhoto() {
    photos[currentPhotoIndex].classList.remove('active');
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].classList.add('active');
}

// Cambia de foto cada 3 segundos
setInterval(changePhoto, 3000);

// --- 2. Botón "No" que huye ---
function moverBotonNo() {
    // Calculamos posiciones aleatorias restando el tamaño del botón
    // para que no se salga de los bordes
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener('mouseenter', moverBotonNo);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita que se haga click en móviles
    moverBotonNo();
});

// --- 3. Acción al decir que SÍ ---
yesBtn.addEventListener('click', () => {
    // Intentamos reproducir música
    bgMusic.play();
    
    alert('¡SABÍA QUE DIRÍAS QUE SÍ! ❤️ Te amo demasiado, gracias por ser mi San Valentín.');
    
    // Opcional: Si quieres que al aceptar exploten confetis o algo así,
    // podrías añadir una librería más adelante.
});

// Activar música al primer toque en la pantalla (requisito de Chrome/Safari)
document.addEventListener('click', () => {
    bgMusic.play();
}, { once: true });