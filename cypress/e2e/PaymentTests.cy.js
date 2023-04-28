import HandoffMethodPage from './Pages/HandoffMethodPage';
import MenuPage from './Pages/MenuPage';
import CustomizeItemPage from './Pages/CustomizeItemPage';
import BasketPage from './Pages/BasketPage';
import CheckoutPage from './Pages/CheckoutPage';
import OrderReceivedPage from './Pages/OrderReceivedPage';


describe('Payment Method', () => {
  const handoffMethodPage = new HandoffMethodPage();
  const menuPage = new MenuPage();
  const customizeItemPage = new CustomizeItemPage();
  const basketPage = new BasketPage();
  const checkoutPage = new CheckoutPage();
  const orderReceivedPage = new OrderReceivedPage();

  beforeEach(() => {
    cy.visit('https://mav-qa.outback.com/order')
  })

  it('[Curbside] Verificar se o usuário consegue pagar com dinheiro', () => {

    handoffMethodPage.onetrustClose();
    handoffMethodPage.curbsideAdress();
    handoffMethodPage.continueRestaurant();

    menuPage.productSelect();

    customizeItemPage.addBasket();

    basketPage.basketClick();
    basketPage.basketContinueClick();

    checkoutPage.inputCarModel();
    checkoutPage.inputCarMake();
    checkoutPage.inputCarColor();

    checkoutPage.inputFirstName();
    checkoutPage.inputLastName();
    checkoutPage.inputEmail();
    checkoutPage.inputPhone();

    checkoutPage.paymentOptionsClick();
    checkoutPage.paymentSelectOptionsPaymentAtRestaurant();

    checkoutPage.checkoutButton();

    orderReceivedPage.namePage();
    
  })

  it('[Curbside] Verificar se o usuário consegue pagar por cartão de crédito', () => {

    handoffMethodPage.onetrustClose();
    handoffMethodPage.curbsideAdress();
    handoffMethodPage.continueRestaurant();

    menuPage.productSelect();

    customizeItemPage.addBasket();

    basketPage.basketClick();
    basketPage.basketContinueClick();

    checkoutPage.paymentOptionsClick();
    checkoutPage.paymentSelectOptionsCreditCard();
    checkoutPage.inputCreditCardNumber();
    checkoutPage.inputCreditCardCvc();
    checkoutPage.inputCreditCardDate();
    checkoutPage.inputCreditCardZip();

    checkoutPage.inputCarModel();
    checkoutPage.inputCarMake();
    checkoutPage.inputCarColor();

    checkoutPage.inputFirstName();
    checkoutPage.inputLastName();
    checkoutPage.inputEmail();
    checkoutPage.inputPhone();

    checkoutPage.checkoutButton();

    orderReceivedPage.namePage();
    
  })

  it('[Delivery] Verificar se o usuário consegue pagar por cartão de crédito', () => {
    handoffMethodPage.onetrustClose();
    handoffMethodPage.selectDelivery();
    handoffMethodPage.inputDeliveryAddress();
    handoffMethodPage.selectAutocompletDelivery();
    handoffMethodPage.inputSuite();
    handoffMethodPage.buttonDeliveryContinue();

    menuPage.productSelect();

    customizeItemPage.addBasket();

    basketPage.basketClick();
    basketPage.basketContinueClick();

    checkoutPage.paymentOptionsClick();
    checkoutPage.paymentSelectOptionsCreditCard();
    checkoutPage.inputCreditCardNumber();
    checkoutPage.inputCreditCardCvc();
    checkoutPage.inputCreditCardDate();
    checkoutPage.inputCreditCardZip();

    checkoutPage.inputFirstName();
    checkoutPage.inputLastName();
    checkoutPage.inputEmail();
    checkoutPage.inputPhone();

    checkoutPage.checkoutButton();

    orderReceivedPage.namePage();
   
    
  })


});
