import { BAAS } from '../services';

class TechnologiesList {
  async getTechnologies () {
    const technologies = await BAAS.getTechnologies();
    return technologies.map(technologie => `
      <li class="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center opleiding__technologies-item">
        <p>${technologie.name}</p>
        <img src="${technologie.logo}" alt="Logo of ${technologie.name}">
      </li>
    `).join('');
  }

  async render () {
    return `
      ${await this.getTechnologies()}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default TechnologiesList;
