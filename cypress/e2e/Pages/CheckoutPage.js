class CheckoutPage{
    paymentOptionsClick() {
        return cy.get('[data-testid="payment-tile"]').click();
    }

    paymentSelectOptionsPaymentAtRestaurant() {
      return cy.get('[data-testid="payment-option-1"] > [data-testid="payment-tile"] > [data-testid="card-number"]').click();
    }

    paymentSelectOptionsCreditCard() {
        return cy.get('[data-testid="payment-option-0"] > [data-testid="payment-tile"]').click();
    }

    inputCreditCardNumber(){
        return cy.get('[data-testid="card-number-input"]').type('4111 1111 1111 1111');
    }

    inputCreditCardCvc(){
        return cy.get('[data-testid="cvc-input"]').type('1111');
    }

    inputCreditCardDate(){
        return cy.get('[data-testid="expiration-date-input"]').type('08/24');
    }
    
    inputCreditCardZip(){
        return cy.get('[data-testid="zip-input"]').type('11111');
    }

    inputCarModel() {
        return cy.get('[data-testid="car-model-input"]').type('fusca');
    }

    inputCarMake() {
        return cy.get('[data-testid="car-make-input"]').type('fusca');
    }

    inputCarColor() {
        return cy.get('[data-testid="car-color-input"]').type('azul');
    }

    inputFirstName() {
        return cy.get('[data-testid="first-name-input"]').type('Lore');
    }

    inputLastName() {
        return cy.get('[data-testid="last-name-input"]').type('na');
    }

    inputEmail() {
        return cy.get('[data-testid="email-input"]').type('lore@na.com');
    }

    inputPhone() {
        return cy.get('[data-testid="phone-input"]').type('(382) 483-7483');
    }

    checkoutButton() {
       return cy.get('[data-testid="checkout-button"] > [data-testid="text"]').click(),
        cy.wait(5000);
    }
};

export default CheckoutPage;