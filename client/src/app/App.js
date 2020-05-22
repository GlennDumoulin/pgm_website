import { Router, routes } from './router';
import {
  HomePage, AboutPage, NotFoundPage, PostDetailPage, CasesPage, TeamPage,
} from './pages';
import { Header } from './components';

class App {
  constructor (container) {
    // Root container
    this.container = container;

    // Pages
    this.pageHome = new HomePage();
    this.pageAbout = new AboutPage();
    this.pageNotFound = new NotFoundPage();
    this.pagePostDetail = new PostDetailPage();
    this.pageCases = new CasesPage();
    this.pageTeam = new TeamPage();

    // Components
    this.compHeader = new Header();
  }

  async render () {
    return `
    ${await this.compHeader.render()}
    <main class="main">
      <div id="children"></div>
    </div>    
    `;
  }

  async afterRender () {
    await this.compHeader.afterRender();

    this.childrenContainer = document.getElementById('children');
    // Router
    this.router = new Router(this.childrenContainer);
    this.router.addRoute(routes.LANDING, this.pageHome);
    this.router.addRoute(routes.HOME, this.pageHome);
    this.router.addRoute(routes.ABOUT, this.pageAbout);
    this.router.addRoute(routes.POST_DETAIL, this.pagePostDetail);
    this.router.addRoute(routes.CASES, this.pageCases);
    this.router.addRoute(routes.TEAM, this.pageTeam);
    this.router.setNotFoundPage(this.pageNotFound);   
  }
}

export default App;
