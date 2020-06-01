import { TeamList, StudentsList } from '../components';

class PGMTeamPage {
  constructor () {
    this.compTeamList = new TeamList();
    this.compStudentsList = new StudentsList();
  }

  async render () {
    return `
      <div class="page page--team container">
        <h1>PGM-Team</h1>
        <h2>PGM-medewerkers</h2>
        ${await this.compTeamList.render()}
        <h2>Studenten</h2>
        <form class="d-flex filter">
          <label class="filter__label">Filter op jaar:</label>
          <select id="year" name="year" class="filter__item">
            <option value="2019-2021">2019-2021</option>
            <option value="2020-2022">2020-2022</option>
          </select>
          <button type="button" onclick="alert('Hello World!')" class="filter__button">Pas filter toe <i class="fas fa-filter no-borders"></i></button>
        </form>
        ${await this.compStudentsList.render()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compTeamList.afterRender();
    this.compStudentsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default PGMTeamPage;
