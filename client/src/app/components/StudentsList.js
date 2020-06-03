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
    console.log(students);
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
      console.log('Array is empty');
      return `<p>Er zijn geen resultaten gevonden.</p>`;
    }
    if (array.length !== 0) {
      return this.displayStudents(array);
    }
    return this;
  }

  async render (filter = 'all') {
    return `
      <form id="students-filter" class="d-flex align-items-center filter">
        <label for="year" class="filter__label">Filter op jaar:</label>
        <select id="year" name="year" class="filter__item">
          <option value="all">geen filter</option>
          <option value="2019 - 2021">2019 - 2021</option>
          <option value="2020 - 2022">2020 - 2022</option>
        </select>
        <button type="submit" class="filter__button">Pas filter toe <i class="fas fa-filter no-borders"></i></button>
      </form>
      <div class="row students-list justify-content-center">
        ${await this.getStudents(filter)}     
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    const filterForm = document.getElementById('students-filter');
    filterForm.addEventListener(('submit'), (ev) => {
      ev.preventDefault();

      /* eslint-disable no-undef */
      const formData = new FormData(filterForm);
      const studentsFilter = formData.get('year');
      console.log(studentsFilter);
      this.render(studentsFilter);
    });
    return this;
  }
}

export default StudentsList;
