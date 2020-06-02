import { BAAS } from '../services';

class StudentDetailPage {
  constructor (n = null) {
    this.n = n;
  }

  async getStudent () {
    const searchLink = window.location.hash;
    const searchId = searchLink.substring(searchLink.lastIndexOf('/') + 1);
    const student = await BAAS.getStudent(searchId);
    return `
      <div class="student-detail">
        <h2>${student.fields.name_first} ${student.fields.name_last}</h2>
      </div>
    `;
  }

  async render () {
    return `
      <div class="page page--student_detail container">
        <h1>Student detail</h1>
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
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default StudentDetailPage;
