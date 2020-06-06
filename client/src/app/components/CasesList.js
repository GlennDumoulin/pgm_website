// imports
import { BAAS } from '../services';

import { routes } from '../router';

// class to display cases
class CasesList {
  // constructor to specify how many cases you would like
  constructor (n = null) {
    this.n = n;
  }

  // get the data of the cases from the BAAS
  // select n random items from the array
  // filter the data based on selected filters
  async getCases (filter = {
    course: 'all',
    year: 'all',
  }) {
    let cases = await BAAS.getCases();
    if (this.n !== null) {
      const randomCases = [];
      for (let i = 0; i < this.n; i++) {
        randomCases.push(cases[Math.floor(Math.random() * cases.length)]);
      }
      cases = randomCases;
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

  // display the content
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

  // check if there are items that passed the filterings
  checkArrayLength (array) {
    if (array.length === 0) {
      return `<p>Er zijn geen resultaten gevonden.</p>`;
    }
    if (array.length !== 0) {
      return this.displayCases(array);
    }
    return this;
  }

  // find the thumbnail in the images array
  getThumbnail (array) {
    /* eslint-disable arrow-body-style */
    return array.find((image) => {
      return (image.thumbnail === true);
    });
  }

  // replace the content after a new filter submission
  async replaceContent (filter) {
    const contentWrapper = document.querySelector('.cases-list');
    contentWrapper.innerHTML = await this.render(filter);
    return this;
  }

  // render the content
  async render (filter) {
    return `
      ${await this.getCases(filter)}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

// exporting the class
export default CasesList;
