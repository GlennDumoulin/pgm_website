// imports
import Navigo from 'navigo';

// class to create a Router based on Navigo
class Router {
  // constructor for the container and router
  constructor (container) {
    this.container = container;
    this.router = new Navigo(null, true, '#!');
  }

  // add a route the Router will recognize
  addRoute (location, page) {
    this.router.on(
      location,
      async (params) => {
        this.container.innerHTML = await page.render(params);
        await page.afterRender();
      },
      {
        before: async (done, params) => {
          await page.mount();
          done();
        },
        leave: async () => {
          await page.unmount();
        },
      }
    );
  }

  // set the page when a link is not found
  setNotFoundPage (page) {
    this.router.notFound(
      async (query) => {
        this.container.innerHTML = await page.render();
      }
    );
  }

  // resolve the router
  resolve () {
    this.router.resolve();
  }
}

// exporting the class
export default Router;
