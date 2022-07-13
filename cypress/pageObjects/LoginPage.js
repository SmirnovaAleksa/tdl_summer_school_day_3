import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get accButton(){
    return cy.get('#navbarAccount');
  }
  static get loginButton(){
    return cy.get('#loginButton');
  }
  static get navbarloginButton(){
    return cy.get('#navbarLoginButton');
  }
  static get navbarAccount(){
    return cy.get('#navbarAccount');
  }
  static get emailInput(){
    return cy.get('#email');
  }
  static get passwordInput(){
    return cy.get('#password');
  }
  static get demoName(){
    return cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span');
  }
}

export default LoginPage;
