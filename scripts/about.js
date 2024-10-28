const menuIcon = document.querySelector('.bx-menu');
const navBar = document.querySelector('.links-box');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})