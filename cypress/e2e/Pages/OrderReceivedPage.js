class OrderReceivedPage {
    namePage(){
        return cy.get('.sc-ckLdoV').should('have.text', 'Order Received');
    }
};

export default OrderReceivedPage;