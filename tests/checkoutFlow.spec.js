import { test } from '../fixtures/baseTest';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../pages/CheckoutCompletePage';


test('@regression Complete checkout flow', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);
    const overviewPage = new CheckoutOverviewPage(loggedInPage);
    const completePage = new CheckoutCompletePage(loggedInPage);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutDetails('Ritik', 'QA', '110001');
    await checkoutPage.clickContinue();

    await overviewPage.verifyOverviewPageLoaded();
    await overviewPage.finishOrder();

    await completePage.verifyOrderSuccess();

});