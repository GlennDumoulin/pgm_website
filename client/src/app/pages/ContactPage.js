// imports
import { ContactMap, ContactsList } from '../components';

// class to display contact page
class ContactPage {
  // constructor for used components
  constructor () {
    this.compContactsList = new ContactsList();
    this.compContactMap = new ContactMap();
  }

  // render the content
  async render () {
    return `
      <div class="page page--contact container">
        <h1>Contact</h1>
        <div class="row no-gutters contact__location">
          <div class="col-12 col-md-5 contact__location-map" id="contactMap"></div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-around contact__location-info">
            <div class="d-flex align-items-center contact__location-info-item">
              <i class="fas fa-home"></i>
              <p>Arteveldehogeschool VZW<br>Industrieweg 232, 9000 Gent</p>
            </div>
            <div class="d-flex align-items-center contact__location-info-item">
              <i class="fas fa-phone-alt"></i>
              <p><a href="tel:092349000" target"_blank">09 234 90 00</a></p>
            </div>
            <div class="d-flex align-items-center contact__location-info-item">
              <i class="fas fa-envelope"></i>
              <p><a href="mailto:info@arteveldehs.be" target"_blank">info@arteveldehs.be</a></p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center contact__list">
          <h2 class="col-12">Belangrijke contactpersonen</h2>
          ${await this.compContactsList.render()}
        </div>
        <div class="contact__form">
          <form id="question-form" class="row contacteer">
            <div class="col-12 col-md-6 d-flex align-items-center contacteer__section">
              <label for="name" class="contacteer__label">Naam</label>
              <input type="text" id="name" name="name" required class="contacteer__item">
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center contacteer__section">
              <label for="email" class="contacteer__label">Email</label>
              <input type="email" id="email" name="email" required class="contacteer__item">
            </div>
            <div class="col-12 d-flex flex-column contacteer__section">
              <label for="question" class="contacteer__label">Stel uw vraag hier</label>
              <textarea id="question" name="question" rows="20" required class="contacteer__item"></textarea>
            </div>
            <div class="col-12 contacteer__section">
              <button type="submit" class="contacteer__button">Vraag verzenden <i class="fas fa-location-arrow no-borders"></i></button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    this.compContactMap.render();
    this.compContactsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    // scroll to the top
    window.scrollTo(0, 0);
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

// exporting the class
export default ContactPage;
