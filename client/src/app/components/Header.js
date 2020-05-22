import { routes } from '../router';

class Header {
  async render () {
    return `
      <header class="header">
        <div class="btn-hamburger">HAMB</div>
        <div class="container nav">
          <div class="row">
            <div class="nav_logo">
              <a href="${routes.HOME}" data-navigo>Home</a>
            </div>
            <div class="nav_pages">
              <a href="${routes.OPLEIDING}" class="nav_pages--item" data-navigo>Opleiding</a>
              <a href="${routes.PGMTEAM}" class="nav_pages--item" data-navigo>PGM-Team</a>
              <a href="${routes.PORTFOLIO}" class="nav_pages--item" data-navigo>Portfolio</a>
              <a href="${routes.NIEUWS}" class="nav_pages--item" data-navigo>Nieuws</a>
              <a href="${routes.WERKPLEKLEREN}" class="nav_pages--item" data-navigo>Werkplekleren</a>
              <a href="${routes.CONTACT}" class="nav_pages--item" data-navigo>Contact</a>
            </div>
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
}

export default Header;
