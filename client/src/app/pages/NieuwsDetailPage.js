// imports
import { BAAS } from '../services';

import { routes } from '../router';

import { PostsList } from '../components';

// class to display nieuws detail
class NieuwsDetailPage {
  // constructor for used components
  constructor () {
    this.compPostsList = new PostsList(2);
  }

  // get data of selected post from the BAAS
  async getPost () {
    const searchLink = window.location.hash;
    const searchId = searchLink.substring(searchLink.lastIndexOf('/') + 1);
    const post = await BAAS.getPost(searchId);
    if (post === undefined) {
      window.location.assign('#!/404');
      return ``;
    }
    return `
      <div class="post">
        <div class="row post-basic">
          <div class="col-10 col-lg-11">
            <h1 class="post-basic__item">${post.title}</h1>
            <p>Gemaakt op ${this.getReadableDate(post.createdAt)}</p>
          </div>
          <div class="btn-back col-2 col-md-1">
            <a href="#!${routes.NIEUWS}"><i class="fas fa-times"></i></a>
          </div>
        </div>
        <div class="post-about">
          <div class="card post-about__main">
            <img src="${post.thumbnail}" alt="Thumbnail for post" class="post-about__main-image">
            <div class="post-about__main-body">
              ${post.body}
            </div>
          </div>
          <div class="post-about__authors">
            <h3>Geschreven door:</h3>
            <ul>
              ${this.getAuthors(post.authors)}
            </ul>
          </div>
        </div>
        <div class="post-tags">
          <h2><i class="fas fa-tags no-borders"></i> Tags</h2>
          <div class="d-flex">
            ${this.getTags(post.tags)}
          </div>
        </div>
        <div class="post-related">
          <h2>Bekijk ook</h2>
          ${await this.compPostsList.render()}
        </div>
      </div>
    `;
  }

  // get a readable date of a post
  getReadableDate (date) {
    return new Date(date).toLocaleDateString();
  }

  // get the authors of a post
  getAuthors (array) {
    return array.map(maker => `
      <li>${maker}</li>
    `).join('');
  }

  // get the tags of a post
  getTags (array) {
    return array.map(tag => `
      <p>${tag}</p>
    `).join('');
  }

  // render the content
  async render () {
    return `
      <div class="page page--nieuws_detail container">
        ${await this.getPost()}
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compPostsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    // scroll to the top
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

// exporting the class
export default NieuwsDetailPage;
