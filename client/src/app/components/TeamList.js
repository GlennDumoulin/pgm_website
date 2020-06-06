// imports
import { BAAS } from '../services';

// class to display team
class TeamList {
  // constructor to specify how many members you would like
  constructor (n = null) {
    this.n = n;
  }

  // get the data of the team from the BAAS
  // get the first n members from the array
  async getTeam () {
    let team = await BAAS.getTeam();
    if (this.n !== null) {
      team = team.slice(0, this.n);
    }
    return team.map(member => `
      <div class="col-9 col-md-6 col-lg-4">
        <div class="card team-list__item">
          <img src="${member.thumbnail}" alt="Image of ${member.name}" class="card__image">
          <div class="d-flex card__info">
            <i class="fas fa-user no-borders"></i>
            <p>${member.name}</p>
          </div>
          <div class="d-flex card__info">
            <i class="fas fa-wrench no-borders"></i>
            <ul>
              ${this.getFunctions(member.functions)}
            </ul>
          </div>
        </div>
      </div>
    `).join('');
  }

  // get the functions of a member
  getFunctions (array) {
    return array.map(funct => `
      <li>${funct}</li>
    `).join('');
  }

  // render the content
  async render () {
    return `
      ${await this.getTeam()}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

// exporting the class
export default TeamList;
