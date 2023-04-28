class CustomizeItemPage { 
    addBasket() {
        return cy.get('[data-testid="add-to-cart-button"]').click(),
        cy.wait(2000);
    }
};

export default CustomizeItemPage;