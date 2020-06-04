import { BAAS } from '../services';

import { routes } from '../router';

class StudentsList {
  constructor (n = null) {
    this.n = n;
  }

  async getStudents (filter) {
    let students = await BAAS.getStudents();
    if (this.n !== null) {
      students = students.slice(0, this.n);
    }
    if (filter !== 'all') {
      /* eslint-disable arrow-body-style */
      students = students.filter((student) => {
        return (student.fields.generation === filter);
      });
    }
    students.sort((a, b) => a.fields.name_first.localeCompare(b.fields.name_first));
    return this.checkArrayLength(students);
  }

  async displayStudents (array) {
    return array.map(student => `
      <div class="col-6 col-md-4 col-lg-3">
        <a href="#!${routes.STUDENT_DETAIL.replace(':id', student.id)}">
          <div class="card students-list__item">
            <img src="${student.fields.img[0].thumbnails.large.url}" alt="Image of ${student.fields.name_first}" class="card__image">
            <div class="d-flex card__info">
              <i class="fas fa-user no-borders"></i>
              <p>${student.fields.name_first} ${student.fields.name_last}</p>
            </div>
            <div class="d-flex card__info">
              <i class="fas fa-calendar-alt no-borders"></i>
              <p>${student.fields.generation}</p>
            </div>
          </div>
        </a>
      </div>
    `).join('');
  }

  checkArrayLength (array) {
    if (array.length === 0) {
      return `<p>Er zijn geen resultaten gevonden.</p>`;
    }
    if (array.length !== 0) {
      return this.displayStudents(array);
    }
    return this;
  }

  async replaceContent (filter) {
    const contentWrapper = document.querySelector('.students-list');
    contentWrapper.innerHTML = await this.render(filter);
    return this;
  }

  async render (filter = 'all') {
    return `
      ${await this.getStudents(filter)}
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default StudentsList;
