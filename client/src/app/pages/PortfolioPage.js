import { CasesList } from '../components';

class PortfolioPage {
  constructor () {
    this.compCasesList = new CasesList();
  }

  async render () {
    return `
      <div class="page page--portfolio container">
        <h1>Portfolio</h1>
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
        ${await this.compCasesList.render()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compCasesList.afterRender();

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
      this.compCasesList.render(casesFilter);
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

export default PortfolioPage;
