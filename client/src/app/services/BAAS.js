const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-glendumo';

class BAAS {
  static getOpleiding = async () => {
    const response = await fetch(`${DOMAIN}/data/opleiding/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getTeam = async () => {
    const response = await fetch(`${DOMAIN}/data/team/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getStudents = async () => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getStudent = async (id) => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData.find(student => student.id === id);
  }

  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/portfolio/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/portfolio/index.json`);
    const jsonData = await response.json();
    return jsonData.find(project => project.id === id);
  }

  static getPosts = async () => {
    const response = await fetch(`${DOMAIN}/data/nieuws/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/nieuws/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  static getContacts = async () => {
    const response = await fetch(`${DOMAIN}/data/contacts/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }
}

export default BAAS;
