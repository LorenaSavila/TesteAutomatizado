class MenuPage {
 productSelect() {
    return cy.get('[data-testid="12401824-product-card"] > .sc-ibvwTS > #product-image-container > [data-testid="image"]').click();
 }

};

export default MenuPage;