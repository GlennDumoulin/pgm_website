import ahsBuilding from '../_static/images/ahs_building.jpg';
import compAndCode from '../_static/images/computers_and_code.jpg';

class WerkpleklerenPage {
  async render () {
    return `
      <div class="page page--werkplekleren container">
        <h1>Werkplekleren</h1>
        <div class="werkplekleren__description">
          <p>Deze pagina is bedoeld voor bedrijven die geïnteresseerd zijn om onze studenten iets bij te brengen. Dit kan adhv een gastcollege, workshop, stage of bedrijfsbezoek.</p>
          <p>U kan ook opteren als jurylid voor eindwerken van onze studenten of u kan zelf een eindwerk voorstellen.</p>
        </div>
        <div class="row no-gutters werkplekleren__images">
          <img src="${ahsBuilding}" alt="Image of the AHS building" class="col-12 col-md-6">
          <img src="${compAndCode}" alt="Image of computers & code" class="col-12 col-md-6">
        </div>
        <div class="d-flex justify-content-center werkplekleren__form">
          <iframe src= "https://forms.office.com/Pages/ResponsePage.aspx?id=6oDgtrmteUyTA23Pgm-4VFTLemU7UkxNvqs4ywgbUGtUMk03SlRNMTZYNU5PN1EzOE1UM0YzTkVQUi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe>
        </div>
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

export default WerkpleklerenPage;
