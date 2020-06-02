class HomePage {
  async render () {
    return `
      <div class="page page--home container">
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
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default HomePage;
