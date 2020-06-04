import { BAAS } from '../services';

class TeamList {
  constructor (n = null) {
    this.n = n;
  }

  async getTeam () {
    let team = await BAAS.getTeam();
    if (this.n !== null) {
      team = team.slice(0, this.n);
    }
    return team.map(member => `
      <div class="col-6 col-md-4 col-lg-3">
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

  getFunctions (array) {
    return array.map(funct => `
      <li>${funct}</li>
    `).join('');
  }

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

export default TeamList;
