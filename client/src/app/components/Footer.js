class Footer {
  async render () {
    return `
      <footer class="footer">
        <div class="container">
          <h1>Footer</h1>
        </div>     
      </footer>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default Footer;
