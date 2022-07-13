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
  static get itemDescription() {
    return cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)');
  }
  static get itemName() {
    return cy.get("[class='item-name']");
  }
  
  static get closeCard() {
    return cy.get('.close-dialog');
  }
  //--comments-
  static get expandReiew() {
    return cy.get('.mat-expansion-indicator');
  }
  
  static get firstComment(){
    return cy.get(':nth-child(1) > [fxlayout="row"] > .mat-tooltip-trigger > p');
  }

  static get inputComment(){
    return cy.get('#mat-input-1');
  }

  static get submitButton(){
    return cy.get('#submitButton');
  }
  static get comentSection(){
    return cy.get('.mat-tooltip-trigger');
  }
  //--Cards--
  static get cards(){
    return cy.get("[class ='mat-grid-tile ng-star-inserted']")
  }
  static get selectAmontOfCards(){
    return  cy.get('.mat-select-arrow-wrapper');
  }
  static get optionOne(){
    return cy.get('#mat-option-1');
  }
  static get optionTwo(){
    return cy.get('#mat-option-2');
  }
  //--basket--
  static get basketButton(){
    return cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted');
  }
  static get checkoutButton(){
    return cy.get('#checkoutButton');
  }
  static get check(){
    return cy.get('.mat-radio-inner-circle');
  }
  static get buttonNext(){
    return cy.get('.btn-next');
  }
  static get standartDelivery(){
    return cy.get('#mat-radio-43 > .mat-radio-label');
  }
  static get nextButton(){
    return cy.get('.nextButton');
  }
  static get validation(){
    return cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation');
  }
  static get addBasketButton(){
    return cy.get('[style="display: flex; justify-content: center;"] > .mat-focus-indicator');
  }
  //--address--
  // cy.get('#mat-input-1')
  static get countryInput(){
    return cy.get('#mat-input-1');
  }
  // cy.get('#mat-input-2')
  static get nameInput(){
    return cy.get('#mat-input-2');
  }
  // cy.get('#mat-input-3')
  static get mobileInput(){
    return cy.get('#mat-input-3');
  }
  // cy.get('#mat-input-4')
  static get zipCodeInput(){
    return cy.get('#mat-input-4');
  }
  // cy.get('#address')
  static get addressInput(){
    return cy.get('#address');
  }
  // cy.get('#mat-input-6')
  static get cityInput(){
    return cy.get('#mat-input-6');
  }
  // cy.get('#mat-input-7')
  static get StateInput(){
    return cy.get('#mat-input-7');
  }

  static get addressTable(){
    return cy.get('[class = "mat-row cdk-row ng-star-inserted"]');
  }
  static get button(){
    return cy.get(':button');
  }
  //cy.get('#mat-expansion-panel-header-0')
  static get addNewCard(){
    return cy.get('#mat-expansion-panel-header-0');
  }
}

export default HomePage;
