import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get searchButton() {
    return cy.get('.mat-search_icon-search');
  }
  static get searchInput() {
    return cy.get('#mat-input-0');
  }
  static get lemonJuice() {
    return cy.get('.mat-card');
  }
  static get lemonJuiceDescription() {
    return cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)');
  }
}

export default HomePage;
