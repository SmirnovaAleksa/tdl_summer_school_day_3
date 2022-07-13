import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    LoginPage.accButton.click();
    // Click Login button
    LoginPage.navbarloginButton.click();
    // Set email value to "demo"
    LoginPage.emailInput.type("demo");
    // Set password value to "demo"
    LoginPage.passwordInput.type("demo");
    // Click Log in
    LoginPage.loginButton.click();
    // Click Account button
    LoginPage.accButton.click();
    // Validate that "demo" account name appears in the menu section
    LoginPage.demoName.should("have.text"," demo ");
  });

  it("Registration", () => {
    // Click Account button
    RegistrationPage.accButton.click();
    // Login button
    RegistrationPage.navbarloginButton.click();
    // Click "Not yet a customer?"
    RegistrationPage.newCustumer.click();
    // Find - how to generate random number in JS
    let randomNum = Math.floor(Math.random() * 9999);
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    RegistrationPage.newEmail.type(`email_${randomNum}@ebox.com`)
    // Save that email address to some variable
    let randomEmail = `email_${randomNum}@ebox.com`;
    // Fill in password field and repeat password field with same password
    RegistrationPage.newPassword.type("password");
    RegistrationPage.repeatPassword.type("password");
    // Click on Security Question menu
    RegistrationPage.selectButton.click();
    // Select  "Name of your favorite pet?"
    RegistrationPage.favPetOption.click();
    // Fill in answer
    RegistrationPage.securityAnswer.type("Kisa");
    // Click Register button
    RegistrationPage.registerButton.click();
    // Set email value to previously created email
    RegistrationPage.emailInput.type(randomEmail);
    // Set password value to previously used password value
    RegistrationPage.passwordInput.type("password");
    // Click login button
    RegistrationPage.loginButton.click();
    // Click Account button
    RegistrationPage.accButton.click();
    // Validate that account name (with previously created email address) appears in the menu section
   RegistrationPage.demoName.should("contain.text",randomEmail);
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Lemon
    HomePage.searchInput.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.itemName.contains("Lemon Juice").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.itemDescription.should("have.text","Sour but full of vitamins.");
  });

   // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchInput.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.itemName.contains("Lemon Juice").click();
    // // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.itemDescription.should("have.text","Sour but full of vitamins.");
  });

  // Create scenario - Search 500ml and validate cards
  it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchInput.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.itemName.contains("Eggfruit Juice").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.itemDescription.should("have.text","Now with even more exotic flavour.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.itemName.contains("Lemon Juice").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.itemDescription.should("have.text","Sour but full of vitamins.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.itemName.contains("Strawberry Juice").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.itemDescription.should("have.text","Sweet & tasty!");
  });
  

  // Create scenario - Read a review
  it("Read a review", () => {
  // Click on search icon
  HomePage.searchButton.click();
  // Search for King
  HomePage.searchInput.type("King{enter}");
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  HomePage.itemName.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
  // Click expand reviews button/icon (wait for reviews to appear)
  //HomePage.expandReiew.click();
  cy.wait(160);
  HomePage.expandReiew.click();
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
  HomePage.firstComment.should("have.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  // Create scenario - Add a review
  it("Add a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Raspberry
    HomePage.searchInput.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.itemName.contains('Raspberry Juice').click();
    // Type in review - "Tastes like metal"
    cy.wait(160);
    HomePage.inputComment.type("Tastes like metal");
    // Click Submit
    HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReiew.click();
    // Validate review -  "Tastes like metal"
    //HomePage.firstComment.should("have.text","Tastes like metal");
    HomePage.comentSection.last().should("contain.text","Tastes like metal");
  });

  // Create scenario - Validate product card amount
  it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.cards.should("have.length","12");
    // Change items per page (at the bottom of page) to 24
    HomePage.selectAmontOfCards.click();
    HomePage.optionOne.click();
    // Validate that the amount of cards is 24
    HomePage.cards.should("have.length","24");
    // Change items per page (at the bottom of page) to 36
    HomePage.selectAmontOfCards.click();
    HomePage.optionTwo.click();
    // Validate that the amount of cards is 35
    HomePage.cards.should("have.length","35");
  });

  // Create scenario - Buy Girlie T-shirt
  it("Buy Girlie T-shirt", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Girlie
    HomePage.searchInput.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addBasketButton.click();
    // Click on "Your Basket" button
    HomePage.basketButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    HomePage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    HomePage.check.click();
    // Click Continue button
    HomePage.buttonNext.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    HomePage.standartDelivery.click();
    // Click Continue button
    HomePage.nextButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    HomePage.check.click();
    // Click Continue button
    HomePage.nextButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    HomePage.checkoutButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    HomePage.validation.should("have.text","Thank you for your purchase!");
  });

  // Create scenario - Add address
  it("Add address", () => {
    // Click on Account
    RegistrationPage.accButton.click();
    // Click on Orders & Payment
    HomePage.button.contains('Orders & Payment').click();
    // Click on My saved addresses
    HomePage.button.contains('My saved addresses').click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    HomePage.button.contains('Add New Address').click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    HomePage.countryInput.type("Latvia");
    HomePage.nameInput.type("Aleksandra");
    HomePage.mobileInput.type("26777879");
    HomePage.zipCodeInput.type("LV-3601");
    HomePage.addressInput.type("Sigūldas iela 35");
    HomePage.cityInput.type("Ventspils");
    HomePage.StateInput.type("Kurzeme");
    // Click Submit button
    HomePage.submitButton.click();
    // Validate that previously added address is visible
    HomePage.addressTable.last().should("contain.text","Aleksandra  Sigūldas iela 35, Ventspils, Kurzeme, LV-3601 Latvia");
  });

  // Create scenario - Add payment option
  it.only("Add payment option", () => {
    // Click on Account
    RegistrationPage.accButton.click();
    // Click on Orders & Payment
    HomePage.button.contains('Orders & Payment').click();
    // Click on My payment options
    HomePage.button.contains('My Payment Options').click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    HomePage.addNewCard.click();
    // Fill in Name
    HomePage.countryInput.type("Aleksandra");
    // Fill in Card Number
    HomePage.nameInput.type("1234561234561234");
    // Set expiry month to 7
    HomePage.mobileInput.select('7');
    // Set expiry year to 2090
    HomePage.zipCodeInput.select('2090');
    // Click Submit button
    HomePage.submitButton.click();
    // Validate that the card shows up in the list
    cy.wait(100);
    HomePage.addressTable.last().should("contain.text","******1234 Aleksandra7/2090");
  });
});
