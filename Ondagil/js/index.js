const btnMobile = document.getElementById('btn-mobile');
const drawer = document.getElementById('drawer');
const fechaDrawer = document.getElementById('fecha-drawer');

function toggleDrawer(){
    drawer.classList.toggle('active');
    fechaDrawer.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleDrawer);
fechaDrawer.addEventListener('click', toggleDrawer);

// PRINT DA LARGURA DA TELA
console.log(window.innerWidth);
