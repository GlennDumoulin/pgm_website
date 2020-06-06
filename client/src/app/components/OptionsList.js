// imports
import { BAAS } from '../services';

// class to display all options for opleidings artikels
class OptionsList {
  async getOpleidingsInfo () {
    const opleidingsInfo = await BAAS.getOpleidingsInfo();
    return opleidingsInfo.map(article => `
      <option value="${article.title}">${article.title}</option>
    `).join('');
  }

  // render the content
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

// exporting the class
export default OptionsList;
