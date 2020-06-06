// imports
import { BAAS } from '../services';

import { routes } from '../router';

// class to display student detail
class StudentDetailPage {
  // get data of selected student from the BAAS
  async getStudent () {
    const searchLink = window.location.hash;
    const searchId = searchLink.substring(searchLink.lastIndexOf('/') + 1);
    const student = await BAAS.getStudent(searchId);
    if (student === undefined) {
      window.location.assign('#!/404');
      return ``;
    }
    return `
      <div class="student">
        <div class="row student-basic">
          <div class="col-10 col-lg-11">
            <h1 class="student-basic__item">${student.fields.name_first} ${student.fields.name_last}</h1>
            <h2 class="student-basic__item">${student.fields.generation}</h2>
          </div>
          <div class="btn-back col-2 col-md-1">
            <a href="#!${routes.PGMTEAM}"><i class="fas fa-times"></i></a>
          </div>
        </div>
        <div class="row no-gutters student-about">
          <div class="col-12 col-md-4 student-about__left-col">
            <img src="${student.fields.img[0].thumbnails.large.url}" alt="Image of ${student.fields.name_first}" class="student-about__image">
            <quote class="student-about__quote">"${student.fields.quote}"</quote>
            <h2>Favoriet vak</h2>
            <p><i class="fas fa-star no-borders"></i> ${student.fields.favourite} <i class="fas fa-star no-borders"></i></p>
          </div>
          <div class="col-12 col-md-8 student-about__right-col">
            <p class="student-about__description">${student.fields.about}</p>
            <h2>Interesses</h2>
            <ul class="d-flex student-about__list">
              ${this.getInterests(student.fields.interests)}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // get the interests of a student
  getInterests (array) {
    return array.map(interest => `
      <li class="student-about__item">${interest}</li>
    `).join('');
  }

  // render the content
  async render () {
    return `
      <div class="page page--student_detail container">
        ${await this.getStudent()}
      </div>
    `;
  }

  async afterRender () {
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
export default StudentDetailPage;
