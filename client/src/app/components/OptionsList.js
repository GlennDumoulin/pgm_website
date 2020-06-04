import { BAAS } from '../services';

class OptionsList {
  async getOpleidingsInfo () {
    const opleidingsInfo = await BAAS.getOpleidingsInfo();
    return opleidingsInfo.map(article => `
      <option value="${article.title}">${article.title}</option>
    `).join('');
  }

  async render () {
    return `
      ${await this.getOpleidingsInfo()}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default OptionsList;
