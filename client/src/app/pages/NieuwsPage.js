import { PostsList } from '../components';

class NieuwsPage {
  constructor () {
    this.compPostsList = new PostsList();
  }

  async render () {
    return `
      <div class="page page--nieuws container">
        <h1>Nieuws</h1>
        ${await this.compPostsList.render()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compPostsList.afterRender();

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

export default NieuwsPage;
