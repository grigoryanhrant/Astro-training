const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('expanded')
})