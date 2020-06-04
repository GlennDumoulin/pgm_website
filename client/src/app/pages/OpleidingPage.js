import { OptionsList, Article, TechnologiesList } from '../components';

class OpleidingPage {
  constructor () {
    this.compOptionsList = new OptionsList();
    this.compArticle = new Article();
    this.compTechnologiesList = new TechnologiesList();
  }

  async render () {
    return `
      <div class="page page--opleiding container">
        <div class="opleiding__intro">
          <p><a href="https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren?wvideo=9xnjw678pi"><img src="https://embedwistia-a.akamaihd.net/deliveries/68858ab24ed17c9489fcc2533dc5f99470cb584e.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=000000e0"></a></p>
          <h1>Graduaat Programmeren</h1>
          <p>120 studiepunten, VDAB-traject mogelijk, Campus Mariakerke</p>
          <p>Tijdens het Graduaat Programmeren specialiseer je je in JavaScript, HTML, CSS, UI/UX en software engineering. Naast deze technische kant, leer je ook om creatief en commercieel te denken. Als programmeur creëer je namelijk niet alleen aantrekkelijke en functionele websites, maar werk je ook samen met heel wat bedrijven. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack JavaScript developer.</p>
        </div>
        <div class="opleiding__info">
          <h2>Kies waar u meer over wil weten:</h2>
          <form id="info-selection" class="filter opleiding__info-form">
            <select id="title" name="title" class="filter__item">
              ${await this.compOptionsList.render()}
            </select>
            <button type="submit" class="filter__button">Lees dit artikel <i class="fas fa-book-reader no-borders"></i></button>
          </form>
        </div>
        <div class="opleiding__info-content">
          ${await this.compArticle.render()}
        </div>
        <a href="https://www.pgm.gent/info/" target="_blank" class="d-flex justify-content-center opleiding__curriculum">
          <p>Bekijk het curriculum <i class="fas fa-location-arrow no-borders"></i></p>
        </a>
        <div class="opleiding__technologies">
          <ul class="row opleiding__technologies-list">
            ${await this.compTechnologiesList.render()}
          </ul>
        </div>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compOptionsList.afterRender();
    this.compArticle.afterRender();
    this.compTechnologiesList.afterRender();

    // Connect the listeners
    const selectionForm = document.getElementById('info-selection');
    selectionForm.addEventListener(('submit'), (ev) => {
      ev.preventDefault();

      /* eslint-disable no-undef */
      const formData = new FormData(selectionForm);
      const selectedArticle = formData.get('title');
      this.compArticle.replaceContent(selectedArticle);
    });
    return this;
  }

  async mount () {
    // Before the rendering of the page
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default OpleidingPage;
