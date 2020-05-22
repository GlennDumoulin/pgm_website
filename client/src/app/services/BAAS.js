const DOMAIN = 'https://pgmgent-1920-students.github.io/atwork2-case1-baas';

class BAAS {
  static getPosts = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }
}

export default BAAS;
