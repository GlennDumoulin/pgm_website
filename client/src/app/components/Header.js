// imports
import { routes } from '../router';

import pgmLogo from '../_static/images/pgm_logo.png';

// class to display the header
class Header {
  // render the content
  async render () {
    return `
      <header class="header">
        <nav class="nav row align-items-center justify-content-between">
          <div class="nav_logo">
            <a href="${routes.HOME}" data-navigo>
              <img src="${pgmLogo}" alt="Logo Graduaat Programmeren">
            </a>
          </div>
          <div class="nav_btn btn-hamburger"><i class="fas fa-bars"></i></div>
          <ul class="nav__list row justify-content-between">
            <li class="nav__item"><a href="${routes.OPLEIDING}" data-navigo>Opleiding</a></li>
            <li class="nav__item"><a href="${routes.PGMTEAM}" data-navigo>PGM-Team</a></li>
            <li class="nav__item"><a href="${routes.PORTFOLIO}" data-navigo>Portfolio</a></li>
            <li class="nav__item"><a href="${routes.NIEUWS}" data-navigo>Nieuws</a></li>
            <li class="nav__item"><a href="${routes.WERKPLEKLEREN}" data-navigo>Werkplekleren</a></li>
            <li class="nav__item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
          </ul>
          <ul class="nav_hamb">
            <li class="nav__item"><a href="${routes.OPLEIDING}" data-navigo>Opleiding</a></li>
            <li class="nav__item"><a href="${routes.PGMTEAM}" data-navigo>PGM-Team</a></li>
            <li class="nav__item"><a href="${routes.PORTFOLIO}" data-navigo>Portfolio</a></li>
            <li class="nav__item"><a href="${routes.NIEUWS}" data-navigo>Nieuws</a></li>
            <li class="nav__item"><a href="${routes.WERKPLEKLEREN}" data-navigo>Werkplekleren</a></li>
            <li class="nav__item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const btnHamburger = document.querySelector('.btn-hamburger');
    btnHamburger.addEventListener('click', (ev) => {
      const hambNav = document.querySelector('.nav_hamb');
      if (hambNav.style.display === 'block') {
        hambNav.style.display = 'none';
      } else {
        hambNav.style.display = 'block';
      }
    });
    return this;
  }

  // update the navigation to check which link is active
  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.nav__list > .nav__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active', 'underline');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav__list > .nav__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active', 'underline');
    }
  }

  // update the mobile navigation to check which link is active
  updateMobileActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.nav_hamb > .nav__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active', 'underline');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav_hamb > .nav__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active', 'underline');
    }
  }
}

// exporting the class
export default Header;
