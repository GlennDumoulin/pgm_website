// declaring the domain of tha BAAS
const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-glendumo';

// class to fetch the different data collections needed
class BAAS {
  // data for opleiding
  static getOpleidingsInfo = async () => {
    const response = await fetch(`${DOMAIN}/data/opleiding/index.json`);
    const jsonData = await response.json();
    return jsonData[0].articles;
  }

  // data for specific article
  static getArticle = async (title) => {
    const response = await fetch(`${DOMAIN}/data/opleiding/index.json`);
    const jsonData = await response.json();
    return jsonData[0].articles.find(article => article.title === title);
  }

  // data for technologies
  static getTechnologies = async () => {
    const response = await fetch(`${DOMAIN}/data/opleiding/index.json`);
    const jsonData = await response.json();
    return jsonData[1].technologies;
  }

  // data for team
  static getTeam = async () => {
    const response = await fetch(`${DOMAIN}/data/team/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  // data for students
  static getStudents = async () => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  // data for specific student
  static getStudent = async (id) => {
    const response = await fetch(`${DOMAIN}/data/students/index.json`);
    const jsonData = await response.json();
    return jsonData.find(student => student.id === id);
  }

  // data for cases
  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/portfolio/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  // data for specific case
  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/portfolio/index.json`);
    const jsonData = await response.json();
    return jsonData.find(project => project.id === id);
  }

  // data for posts
  static getPosts = async () => {
    const response = await fetch(`${DOMAIN}/data/nieuws/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  // data for specific post
  static getPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/nieuws/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  // data for contacts
  static getContacts = async () => {
    const response = await fetch(`${DOMAIN}/data/contacts/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }
}

// exporting the class
export default BAAS;
