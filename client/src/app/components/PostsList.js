import { BAAS } from '../services';

import { routes } from '../router';

class PostsList {
  constructor (n = null) {
    this.n = n;
  }

  async getPosts () {
    let posts = await BAAS.getPosts();
    if (this.n !== null) {
      posts = posts.slice(0, this.n);
    }
    return this.displayPosts(posts);
  }

  async displayPosts (array) {
    return array.map(post => `
      <div class="container">
        <div class="row no-gutters card posts-list__item">
          <img src="${post.thumbnail}" alt="Thumbnail for ${post.title}" class="col-12 col-md-5 col-lg-4 card__image">
          <div class="col-12 col-md-7 col-lg-8 card__info">
            <h2>${post.title}</h2>
            <p>${post.synopsis}</p>
            <a href="#!${routes.NIEUWS_DETAIL.replace(':id', post.id)}" class="read-more">Lees meer</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  async render () {
    return `
      <div class="posts-list justify-content-center">
        ${await this.getPosts()}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default PostsList;
