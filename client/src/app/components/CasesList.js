import { BAAS } from '../services';

import { routes } from '../router';

class CasesList {
  constructor (n = null) {
    this.n = n;
  }

  async getCases (filter = {
    course: 'all',
    year: 'all',
  }) {
    let cases = await BAAS.getCases();
    if (this.n !== null) {
      cases = cases.slice(0, this.n);
    }
    if (filter.course !== 'all') {
      /* eslint-disable arrow-body-style */
      cases = cases.filter((project) => {
        return (project.course === filter.course);
      });
    }
    if (filter.year !== 'all') {
      /* eslint-disable-next-line */
      cases = cases.filter((project) => {
        return (project.yearCreated === filter.year);
      });
    }
    return this.checkArrayLength(cases);
  }

  async displayCases (array) {
    return array.map(project => `
      <div class="col-12 col-md-6">
        <a href="#!${routes.CASE_DETAIL.replace(':id', project.id)}">
          <div class="card cases-list__item">
            <img src="${this.getThumbnail(project.images).src}" alt="Thumbnail for ${project.title}" class="card__image">
            <span>${project.course}</span>
            <div class="card__info">
              <p><i class="fas fa-info-circle no-borders"></i> ${project.title}</p>
            </div>
            <div class="card__info">
              <p><i class="fas fa-calendar-alt no-borders"></i> created in ${project.yearCreated}</p>
            </div>
          </div>
        </a>
      </div>
    `).join('');
  }

  checkArrayLength (array) {
    if (array.length === 0) {
      return `<p>Er zijn geen resultaten gevonden.</p>`;
    }
    if (array.length !== 0) {
      return this.displayCases(array);
    }
    return this;
  }

  getThumbnail (array) {
    /* eslint-disable arrow-body-style */
    return array.find((image) => {
      return (image.thumbnail === true);
    });
  }

  async replaceContent (filter) {
    const contentWrapper = document.querySelector('.cases-list');
    contentWrapper.innerHTML = await this.render(filter);
    return this;
  }

  async render (filter) {
    return `
      <div class="row cases-list justify-content-center">
        ${await this.getCases(filter)}
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default CasesList;
