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

  updateActiveLink (route) {
    const prevActiveMenuItemElement = document.querySelector(`.footer-section__item > a[class*="active"]`);
    if (prevActiveMenuItemElement) {
      prevActiveMenuItemElement.classList.remove('active');
    }
    const link = route.replace('#!', '');
    const menuItemElement = document.querySelector(`.footer-section__item > a[href*="${link}"]`);
    if (menuItemElement) {
      menuItemElement.classList.add('active');
    }
  }
}

export default Footer;
