/**
 * Нужно оптимизировать и создать код для скролла страницы
 * 1. Скролл по клику с изменением состояния пункта меню
 * 2. Скролл страницы с изменением состояния пункта меню
 */
document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a[href^="#"');
  const firstMenuLink = document.querySelectorAll('header .nav-list__link')[0];
  const menuLine = document.querySelector('header .nav__line');
  const menuLinks = document.querySelectorAll('header .nav-list__link');

  firstMenuLink.parentElement.classList.add('nav-list__item--is-active');
  menuLine.style.left = `${firstMenuLink.offsetLeft}px`;
  menuLine.style.maxWidth = `${firstMenuLink.offsetWidth}px`;

  allLinks.forEach((link) => {
    document.addEventListener('scroll', (e) => {
      e.preventDefault();

      const scrollDistance = window.scrollY;
      const allSections = document.querySelectorAll('section');

      allSections.forEach((block, idx) => {
        if (block.offsetTop - header.offsetHeight <= scrollDistance) {
          if (link.parentElement.classList.contains('nav-list__item--is-active')) {
            link.parentElement.classList.remove('nav-list__item--is-active');
          }

          if (idx !== 0) {
            menuLinks[idx - 1].parentElement.classList.remove('nav-list__item--is-active');
          }
          menuLinks[idx].parentElement.classList.add('nav-list__item--is-active');
          menuLine.style.left = `${menuLinks[idx].offsetLeft}px`;
          menuLine.style.maxWidth = `${menuLinks[idx].offsetWidth}px`;
        }
      });
    });
  });
});
/**
 * Надо раздробить код на функции
 */
