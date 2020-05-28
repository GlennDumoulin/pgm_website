class StudentDetailPage {
  async render () {
    return `
      <div class="page page--student_detail">
        <h1>Student detail</h1>
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default StudentDetailPage;
