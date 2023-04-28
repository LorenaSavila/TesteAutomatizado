class HandoffMethodPage {
 onetrustClose() {
    return cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click();
 } 

 curbsideAdress() {
    return cy.get('[data-testid="curbside-address-input"]').type('ny{enter}');
 }

 continueRestaurant() {
    return cy.get('[data-testid="text"]').click(); 
 }
 
 selectDelivery() {
   return cy.get('[data-testid="selectItem-Delivery"]').click(); 
 }

 inputDeliveryAddress() {
   return cy.get('[data-testid="delivery-address-input"]').type('1 world trade'),
          cy.wait(2000);
 }

 selectAutocompletDelivery(){
   return cy.get('[data-testid="suggestion-option-0"]').click(),
   cy.wait(2000);
 }

 inputSuite(){
   return cy.get('[data-testid="suite-input"]').type('111');
 }

 buttonDeliveryContinue(){
   return cy.get('[data-testid="button"]').click();
 }

};

export default HandoffMethodPage;