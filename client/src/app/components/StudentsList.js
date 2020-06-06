// imports
import { BAAS } from '../services';

import { routes } from '../router';

// class to display students
class StudentsList {
  // constructor to specify the amount of students you would like
  constructor (n = null) {
    this.n = n;
  }

  // get the data of the students from the BAAS
  // get the first n students of the array
  // filter the data based on selected filters
  // sort the data based on the first name
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

  // display the content
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

  // check the length of the array after a new filter has been applied
  checkArrayLength (array) {
    if (array.length === 0) {
      return `<p>Er zijn geen resultaten gevonden.</p>`;
    }
    if (array.length !== 0) {
      return this.displayStudents(array);
    }
    return this;
  }

  // replace content after new filter has been applied
  async replaceContent (filter) {
    const contentWrapper = document.querySelector('.students-list');
    contentWrapper.innerHTML = await this.render(filter);
    return this;
  }

  // render the content
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

// exporting the class
export default StudentsList;
