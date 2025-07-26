const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

bar.addEventListener('click', () => {
    nav.classList.toggle('active');
});
