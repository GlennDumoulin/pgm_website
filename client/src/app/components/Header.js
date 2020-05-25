import { routes } from '../router';

import pgmLogo from '../_static/images/pgm_logo.png';

class Header {
  async render () {
    return `
      <header class="header">
        <div class="container nav">
          <div class="row">
            <div class="nav_logo">
              <a href="${routes.HOME}" data-navigo>
                <img src="${pgmLogo}" alt="Logo PGM">
              </a>
            </div>
            <div class="nav_pages">
              <a href="${routes.OPLEIDING}" class="nav_pages--item" data-navigo>Opleiding</a>
              <a href="${routes.PGMTEAM}" class="nav_pages--item" data-navigo>PGM-Team</a>
              <a href="${routes.PORTFOLIO}" class="nav_pages--item" data-navigo>Portfolio</a>
              <a href="${routes.NIEUWS}" class="nav_pages--item" data-navigo>Nieuws</a>
              <a href="${routes.WERKPLEKLEREN}" class="nav_pages--item" data-navigo>Werkplekleren</a>
              <a href="${routes.CONTACT}" class="nav_pages--item" data-navigo>Contact</a>
            </div>
            <div class="btn-hamburger">HAMB</div>
          </div>
        </div>        
      </header>
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
    const prevActiveMenuItemElement = document.querySelector(`.nav__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.nav__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Header;
