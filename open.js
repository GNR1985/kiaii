const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const closeMenuBtn = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('open');
});

closeMenuBtn.addEventListener('click', () => {
    navList.classList.remove('open');
});
