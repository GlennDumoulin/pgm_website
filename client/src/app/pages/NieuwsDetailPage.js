class NieuwsDetailPage {
  async render () {
    return `
      <div class="page page--nieuws_detail container">
        <h1>Nieuws detail</h1>
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

export default NieuwsDetailPage;
