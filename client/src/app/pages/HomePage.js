class HomePage {
  async render () {
    return `
      <div class="page page--home">
        <h1>Home</h1>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page

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

export default HomePage;
