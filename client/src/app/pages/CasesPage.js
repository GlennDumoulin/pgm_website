class CasesPage {
  async render () {
    return `
      <div class="page page--cases">
        <h1>CASES<h1>
        <img src="https://www.toychamp.be/media/catalog/product/0/1/01424294_002.jpg" />
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default CasesPage;
