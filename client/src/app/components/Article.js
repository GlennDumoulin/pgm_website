import { BAAS } from '../services';

class Article {
  async getArticle (selection) {
    const article = await BAAS.getArticle(selection);
    return `
      ${article.content}
    `;
  }

  async replaceContent (selection) {
    const contentWrapper = document.querySelector('.opleiding__info-content');
    contentWrapper.innerHTML = await this.render(selection);
    return this;
  }

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

export default Article;
