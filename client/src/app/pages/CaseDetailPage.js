import { BAAS } from '../services';

import { routes } from '../router';

import { CasesList, Model } from '../components';

class CaseDetailPage {
  constructor () {
    this.compCasesList = new CasesList(2);
    this.compModel = new Model();
  }

  async getCase () {
    const searchLink = window.location.hash;
    const searchId = searchLink.substring(searchLink.lastIndexOf('/') + 1);
    const project = await BAAS.getCase(searchId);
    if (project === undefined) {
      window.location.assign('#!/404');
      return ``;
    }
    if (project.is3d === false) {
      return `
        <div class="case">
          <div class="row case-basic">
            <div class="col-10 col-lg-11">
              <h1 class="case-basic__item">case - ${project.title}</h1>
            </div>
            <div class="btn-back col-2 col-md-1">
              <a href="#!${routes.PORTFOLIO}"><i class="fas fa-times"></i></a>
            </div>
          </div>
          <div class="row case-about">
            <div class="col-12 col-md-8 case-about__main">
              <p>${project.description}</p>
            </div>
            <div class="col-12 col-md-3 offset-md-1 case-about__side-info">
              <div class="d-flex makers">
                <p>Door:</p>
                <ul>
                  ${this.getMakers(project.makers)}
                </ul>
              </div>
              <p>Jaar: ${project.yearCreated}</p>
              <p>Vak: ${project.course}</p>
            </div>
          </div>
          <div class="row case-images">
            ${this.getImages(project.images)}
          </div>
          <div class="case-tags">
            <h2><i class="fas fa-tags no-borders"></i> Tags</h2>
            <div class="d-flex">
              ${this.getTags(project.tags)}
            </div>
          </div>
          <div class="case-technologies">
            <h2>Gebruikte technologieën</h2>
            <ul class="row case-technologies__list">
              ${this.getTechnologies(project.technologies)}
            </ul>
          </div>
          <div class="case-related">
            <h2>Bekijk ook</h2>
            <div class="row cases-list justify-content-center">
              ${await this.compCasesList.render()}
            </div>
          </div>
        </div>
      `;
    }
    if (project.is3d === true) {
      this.getModel(project.images);
      return `
        <div class="case">
          <div class="row case-basic">
            <div class="col-10 col-lg-11">
              <h1 class="case-basic__item">case - ${project.title}</h1>
            </div>
            <div class="btn-back col-2 col-md-1">
              <a href="#!${routes.PORTFOLIO}"><i class="fas fa-times"></i></a>
            </div>
          </div>
          <div class="row case-about">
            <div class="col-12 col-md-8 case-about__main">
              <p>${project.description}</p>
            </div>
            <div class="col-12 col-md-3 offset-md-1 case-about__side-info">
              <div class="d-flex makers">
                <p>Door:</p>
                <ul>
                  ${this.getMakers(project.makers)}
                </ul>
              </div>
              <p>Jaar: ${project.yearCreated}</p>
              <p>Vak: ${project.course}</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <canvas class="case-model"></canvas>
          </div>
          <div class="case-tags">
            <h2><i class="fas fa-tags no-borders"></i> Tags</h2>
            <div class="d-flex">
              ${this.getTags(project.tags)}
            </div>
          </div>
          <div class="case-technologies">
            <h2>Gebruikte technologieën</h2>
            <ul class="row case-technologies__list">
              ${this.getTechnologies(project.technologies)}
            </ul>
          </div>
          <div class="case-related">
            <h2>Bekijk ook</h2>
            <div class="row cases-list justify-content-center">
              ${await this.compCasesList.render()}
            </div>
          </div>
        </div>
      `;
    }
    return this;
  }

  getMakers (array) {
    return array.map(maker => `
      <li>${maker}</li>
    `).join('');
  }

  getImages (array) {
    return array.map(image => `
      <img src="${image.src}" alt="Image of ${image.alt}" class="col-12 col-md-6 case-images__image">
    `).join('');
  }

  getTags (array) {
    return array.map(tag => `
      <p>${tag}</p>
    `).join('');
  }

  getTechnologies (array) {
    return array.map(technologie => `
      <li class="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center case-technologies__item">
        <p>${technologie.name}</p>
        <img src="${technologie.logoURL}" alt="Logo of ${technologie.name}">
      </li>
    `).join('');
  }

  getModel (array) {
    /* eslint-disable arrow-body-style */
    const model = array.find((image) => {
      return (image.thumbnail === false);
    });
    window.sessionStorage.setItem('model', JSON.stringify(model));
  }

  async render () {
    return `
      <div class="page page--case_detail container">
        ${await this.getCase()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compCasesList.afterRender();

    const modelContainer = document.querySelector('.case-model');
    if (modelContainer !== null) {
      this.compModel.render(JSON.parse(window.sessionStorage.getItem('model')));
      this.compModel.afterRender();
    }

    // Connect the listeners
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

export default CaseDetailPage;
