import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get accButton(){
    return cy.get('#navbarAccount');
  }
  static get navbarloginButton(){
    return cy.get('#navbarLoginButton');
  }
  static get newCustumer(){
    return cy.get('#newCustomerLink');
  }
  //
  static get newEmail(){
    return cy.get('#emailControl');
  }
// 
static get newPassword(){
  return cy.get('#passwordControl');
}
// 
static get repeatPassword(){
  return cy.get('#repeatPasswordControl');
}
// 
static get selectButton(){
  return cy.get('.mat-select-placeholder');
}
// 
static get favPetOption(){
  return cy.get('#mat-option-9 > .mat-option-text');
}
// 
static get securityAnswer(){
  return cy.get('#securityAnswerControl');
}

static get registerButton(){
  return cy.get('#registerButton');
}
static get loginButton(){
  return cy.get('#loginButton');
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

export default RegistrationPage;
