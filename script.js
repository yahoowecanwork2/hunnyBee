const mobile = document.getElementById('mobile');
const navbar = document.getElementById('navbar');

mobile.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
