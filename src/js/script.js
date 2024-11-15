window.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('.header__menu'),
        headerMenuIcon = document.querySelectorAll('.header__menu_icon'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        headerMenu.classList.toggle('header__menu_active');
    });
    headerMenuIcon.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            headerMenu.classList.toggle('header__menu_active');
        })
    })
})