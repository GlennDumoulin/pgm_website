import { Router, routes } from './router';
import {
  HomePage, OpleidingPage, PGMTeamPage, StudentDetailPage, PortfolioPage, CaseDetailPage,
  NieuwsPage, NieuwsDetailPage, WerkpleklerenPage, ContactPage, NotFoundPage,
} from './pages';
import { Header, Footer } from './components';

class App {
  constructor (container) {
    // Root container
    this.container = container;

    // Pages
    this.pageHome = new HomePage();
    this.pageOpleiding = new OpleidingPage();
    this.pagePGMTeam = new PGMTeamPage();
    this.pageStudentDetail = new StudentDetailPage();
    this.pagePortfolio = new PortfolioPage();
    this.pageCaseDetail = new CaseDetailPage();
    this.pageNieuws = new NieuwsPage();
    this.pageNieuwsDetail = new NieuwsDetailPage();
    this.pageWerkplekleren = new WerkpleklerenPage();
    this.pageContact = new ContactPage();
    this.pageNotFound = new NotFoundPage();

    // Components
    this.compHeader = new Header();
    this.compFooter = new Footer();
  }

  async render () {
    return `
    ${await this.compHeader.render()}
    <main class="main">
      <div id="children"></div>
    </main>
    ${await this.compFooter.render()}
    `;
  }

  async afterRender () {
    this.childrenContainer = document.getElementById('children');

    // Router
    this.router = new Router(this.childrenContainer);
    this.router.addRoute(routes.LANDING, this.pageHome);
    this.router.addRoute(routes.HOME, this.pageHome);
    this.router.addRoute(routes.OPLEIDING, this.pageOpleiding);
    this.router.addRoute(routes.PGMTEAM, this.pagePGMTeam);
    this.router.addRoute(routes.STUDENT_DETAIL, this.pageStudentDetail);
    this.router.addRoute(routes.PORTFOLIO, this.pagePortfolio);
    this.router.addRoute(routes.CASE_DETAIL, this.pageCaseDetail);
    this.router.addRoute(routes.NIEUWS, this.pageNieuws);
    this.router.addRoute(routes.NIEUWS_DETAIL, this.pageNieuwsDetail);
    this.router.addRoute(routes.WERKPLEKLEREN, this.pageWerkplekleren);
    this.router.addRoute(routes.CONTACT, this.pageContact);
    this.router.setNotFoundPage(this.pageNotFound);
    this.router.resolve();

    // Register components afterRender methods
    await this.compHeader.afterRender();
    await this.compFooter.afterRender();

    // Listen to changes in history
    window.onpopstate = (event) => {
      this.setActiveLink();
    };

    // Set active link
    this.setActiveLink();
  }

  setActiveLink () {
    this.compHeader.updateActiveLink(document.location.hash);
    this.compFooter.updateActiveLink(document.location.hash);
  }
}

export default App;
