// imports
import { BAAS } from '../services';

import { routes } from '../router';

// class to display posts
class PostsList {
  // constructor to specify the amount of posts you would like
  constructor (n = null) {
    this.n = n;
  }

  // get data of the posts from the BAAS
  // select n random items from the array
  // sort the data based on the created at date
  async getPosts () {
    let posts = await BAAS.getPosts();
    if (this.n !== null) {
      const randomPosts = [];
      for (let i = 0; i < this.n; i++) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        randomPosts.push(posts[randomIndex]);
      }
      posts = randomPosts;
    }
    posts.sort(this.sortOnDate);
    return this.displayPosts(posts);
  }

  // sort the array
  sortOnDate (a, b) {
    let order = 0;
    if (a.createdAt < b.createdAt) {
      order = 1;
    }
    if (a.createdAt > b.createdAt) {
      order = -1;
    }
    return order;
  }

  // display the content for the posts
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

  // render the content
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

// exporting the class
export default PostsList;
