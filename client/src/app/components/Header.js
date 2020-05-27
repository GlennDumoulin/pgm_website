import { routes } from '../router';

import pgmLogo from '../_static/images/pgm_logo.png';

class Header {
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
          <ul class="nav_list justify-content-between">
            <li class="nav_item"><a href="${routes.OPLEIDING}" data-navigo>Opleiding</a></li>
            <li class="nav_item"><a href="${routes.PGMTEAM}" data-navigo>PGM-Team</a></li>
            <li class="nav_item"><a href="${routes.PORTFOLIO}" data-navigo>Portfolio</a></li>
            <li class="nav_item"><a href="${routes.NIEUWS}" data-navigo>Nieuws</a></li>
            <li class="nav_item"><a href="${routes.WERKPLEKLEREN}" data-navigo>Werkplekleren</a></li>
            <li class="nav_item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
          </ul>
        </nav>
      </header>
      <div class="stroke"></div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const btnHamburger = document.querySelector('.btn-hamburger');
    btnHamburger.addEventListener('click', (ev) => {
      console.log(ev);
    });
    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.nav_item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav_item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Header;
