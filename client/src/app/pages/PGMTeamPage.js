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
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default PGMTeamPage;
