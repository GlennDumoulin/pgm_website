import { CasesList } from '../components';

class PortfolioPage {
  constructor () {
    this.compCasesList = new CasesList();
  }

  async render () {
    return `
      <div class="page page--portfolio container">
        <h1>Portfolio</h1>
        ${await this.compCasesList.render()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compCasesList.afterRender();

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

export default PortfolioPage;
