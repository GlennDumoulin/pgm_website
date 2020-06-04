class NotFoundPage {
  async render () {
    return `
      <div class="page page--404 container">
        <h1>404</h1>
        <a href="home" data-navigo>Ga naar de Homepage</a>
      </div>
    `;
  }
}

export default NotFoundPage;
