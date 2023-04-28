class BasketPage {
    basketClick(){
        return cy.get('[data-testid="basket-icon"] > [data-testid="icon"] > svg').click();
    }
   
    basketContinueClick(){
     return cy.get('[data-testid="continue-button"]').click();
    }
};

export default BasketPage;