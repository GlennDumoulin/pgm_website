class OpleidingPage {
  async render () {
    return `
      <div class="page page--opleiding">
        <h1>Opleiding<h1>
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

export default OpleidingPage;
