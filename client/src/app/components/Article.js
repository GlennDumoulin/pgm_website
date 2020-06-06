// imports
import { BAAS } from '../services';

// class to display the selected article
class Article {
  // get the data of the selected article from the BAAS
  async getArticle (selection) {
    const article = await BAAS.getArticle(selection);
    return `
      ${article.content}
    `;
  }

  // replace content after new selection
  async replaceContent (selection) {
    const contentWrapper = document.querySelector('.opleiding__info-content');
    contentWrapper.innerHTML = await this.render(selection);
    return this;
  }

  // render the content
  async render (selection = 'Wat zal je leren?') {
    return `
      ${await this.getArticle(selection)}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

// exporting the class
export default Article;
