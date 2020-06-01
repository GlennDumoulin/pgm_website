import { BAAS } from '../services';

import { routes } from '../router';

class StudentsList {
  constructor (n = null) {
    this.n = n;
  }

  async getStudents () {
    let students = await BAAS.getStudents();
    if (this.n !== null) {
      students = students.slice(0, this.n);
    }
    students.sort((a, b) => a.fields.name_first.localeCompare(b.fields.name_first));
    return students.map(student => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card students-list__item">
          <a href="#!/${routes.STUDENT_DETAIL.replace(':id', student.id)}">
            <img src="${student.fields.img[0].thumbnails.large.url}" alt="Image of ${student.fields.name_first}" class="card__image">
            <div class="d-flex card__info">
              <i class="fas fa-user no-borders"></i>
              <p>${student.fields.name_first} ${student.fields.name_last}</p>
            </div>
            <div class="d-flex card__info">
              <i class="fas fa-calendar-alt no-borders"></i>
              <p>${student.fields.generation}</p>
            </div>
          </a>
        </div>
      </div>
    `).join('');
  }

  async render () {
    return `
      <div class="row students-list align-items-start justify-content-center">
        ${await this.getStudents()}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default StudentsList;
