document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js--toggle-burger');
  const navMenu = document.querySelector('.js--toggle-by-burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('nav-burger--is-active');
    navMenu.classList.toggle('nav__list--is-active');
  });
});
