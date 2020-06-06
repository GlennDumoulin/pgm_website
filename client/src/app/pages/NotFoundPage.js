// class to display a 404 page when the link can not be found
class NotFoundPage {
  // render the content
  async render () {
    return `
      <div class="page page--404 container">
        <h1>404</h1>
        <a href="home" data-navigo>Ga naar de Homepage</a>
      </div>
    `;
  }
}

// exporting the class
export default NotFoundPage;
