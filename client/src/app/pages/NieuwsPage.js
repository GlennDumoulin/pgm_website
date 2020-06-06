// imports
import { PostsList } from '../components';

// class to display nieuws page
class NieuwsPage {
  // constructor for used components
  constructor () {
    this.compPostsList = new PostsList();
  }

  // render the content
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
    // scroll to the top
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

// exporting the class
export default NieuwsPage;
