import { routes } from '../router';

import ahsLogo from '../_static/images/ahs_logo.png';

class Footer {
  async render () {
    return `
      <footer class="footer">
        <div class="stroke"></div>
        <div class="footer-content">
          <div class="container">
            <div class="row">
              <div class="footer-sitemap col-12 col-md-5">
                <h1>Sitemap</h1>
                <ul class="footer-sitemap_list list-style">
                  <li class="footer-sitemap_item"><a href="${routes.HOME}" data-navigo>Home</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.OPLEIDING}" data-navigo>Opleiding</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.PGMTEAM}" data-navigo>PGM-Team</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.PORTFOLIO}" data-navigo>Portfolio</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.NIEUWS}" data-navigo>Nieuws</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.WERKPLEKLEREN}" data-navigo>Werkplekleren</a></li>
                  <li class="footer-sitemap_item"><a href="${routes.CONTACT}" data-navigo>Contact</a></li>
                </ul>
              </div>
              <div class="footer-contact col-12 col-md-5 offset-lg-1">
                <div class="footer-contact-social">
                  <h1>Social Media</h1>
                  <ul class="footer-contact-social_list row">
                    <li class="footer-contact-social_item"><a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    <li class="footer-contact-social_item"><a href="https://www.instagram.com/arteveldehogeschool" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li class="footer-contact-social_item"><a href="https://twitter.com/arteveldehsgent" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
                <div class="footer-contact-contact">
                  <h1>Contacteer ons</h1>
                  <ul class="footer-contact-contact_list">
                    <li class="footer-contact-contact_item"><a href="tel:092349000" target="_blank"><i class="fas fa-phone-alt"></i> 09 234 90 00</a></li>
                    <li class="footer-contact-contact_item"><a href="mailto:info@arteveldehs.be" target="_blank"><i class="fas fa-envelope"></i> info@arteveldehs.be</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-legal">
          <div class="container">
            <div class="row no-gutters align-items-center justify-content-between">
              <p>©Copyright ${new Date().getUTCFullYear()}</p>
              <img src="${ahsLogo}" alt="Logo ArteveldeHogeschool" class="col-3 col-md-2">
              <p>Made by PGM</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.footer-sitemap_item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.footer-sitemap_item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Footer;
