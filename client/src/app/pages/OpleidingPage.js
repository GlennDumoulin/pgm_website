class OpleidingPage {
  async render () {
    return `
      <div class="page page--opleiding container">
        <h1>Opleiding</h1>
      </div>
    `;
  }

  async afterRender () {
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

export default OpleidingPage;
