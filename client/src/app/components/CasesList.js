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
    console.log(cases);
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
      console.log('Array is empty');
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

  async render () {
    return `
      <form id="cases-filter" class="row filter">
        <div class="col-12 col-md-6 d-flex align-items-center filter__section">
          <label for="course" class="filter__label">Filter op vak:</label>
          <select id="course" name="course" class="filter__item">
            <option value="all">geen filter</option>
            <option value="Webdesign">WebDES</option>
            <option value="Webprogramming-1">WebPGM 1</option>
            <option value="Webprogramming-2">WebPGM 2</option>
            <option value="UI/UX-1">UI/UX 1</option>
            <option value="UI/UX-2">UI/UX 2</option>
            <option value="AtWork-1">@Work 1</option>
          </select>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center filter__section">
          <label for="year" class="filter__label">Filter op jaar:</label>
          <select id="year" name="year" class="filter__item">
            <option value="all">geen filter</option>
            <option value="2019-2020">2019 - 2020</option>
            <option value="2020-2021">2020 - 2021</option>
          </select>
        </div>
        <div class="col-12 filter__section">
          <button type="submit" class="filter__button">Pas filters toe <i class="fas fa-filter no-borders"></i></button>
        </div>
      </form>
      <div class="row cases-list justify-content-center">
        ${await this.getCases()}
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const filterForm = document.getElementById('cases-filter');
    filterForm.addEventListener(('submit'), (ev) => {
      ev.preventDefault();

      /* eslint-disable no-undef */
      const formData = new FormData(filterForm);
      const casesFilter = {
        course: formData.get('course'),
        year: formData.get('year'),
      };
      console.log(casesFilter);
      this.getCases(casesFilter);
    });
    return this;
  }
}

export default CasesList;
