// imports
import { routes } from '../router';

import { CasesList, PostsList } from '../components';

// class to display home page
class HomePage {
  // constructor for used components
  constructor () {
    this.compCasesList = new CasesList(2);
    this.compPostsList = new PostsList(2);
  }

  // render the content
  async render () {
    return `
      <div class="page page--home container">
        <div class="home__opleiding">
          <div class="home__opleiding-content">
            <h1>Welkom bij het<br>graduaat programmeren</h1>
            <a href="#!${routes.OPLEIDING}" class="d-flex justify-content-center home__opleiding-button">
              <p>Ontdek meer <i class="fas fa-location-arrow no-borders"></i></p>
            </a>
          </div>
        </div>
        <div class="home__team">
          <h1>Ontmoet het team</h1>
          <a href="#!${routes.PGMTEAM}" class="d-flex justify-content-center home__team-button">
            <p>Ontdek het volledig team</p>
          </a>
        </div>
        <div class="home__portfolio">
          <h1>Bekijk werkstukken van studenten</h1>
          <div class="row cases-list justify-content-center">
            ${await this.compCasesList.render()}
          </div>
          <a href="#!${routes.PORTFOLIO}">Bekijk alle werkstukken</a>
        </div>
        <div class="home__nieuws">
          <h1>Bekijk het nieuws</h1>
          ${await this.compPostsList.render()}
          <a href="#!${routes.NIEUWS}">Bekijk alle artikels</a>
        </div>
        <div class="home__werkplekleren">
          <div class="home__opleiding-content">
            <h2>Is uw bedrijf geïnteresseerd om onze studenten iets aan te leren, te challengen of zelf te beoordelen?<br>Dan is deze pagina precies wat u zoekt!</h2>
            <a href="#!${routes.WERKPLEKLEREN}" class="d-flex justify-content-center home__werkplekleren-button">
              <p>Schrijf uw bedrijf nu in <i class="fas fa-location-arrow no-borders"></i></p>
            </a>
          </div>
        </div>
        <div class="home__contact">
          <a href="#!${routes.CONTACT}" class="d-flex justify-content-center home__contact-button">
            <p>Contacteer ons</p>
          </a>
        </div>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compCasesList.afterRender();
    this.compPostsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    // scroll to the top
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

// exporting the class
export default HomePage;
