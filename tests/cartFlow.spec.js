import { test } from '../fixtures/baseTest';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

test('Verify product added to cart', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyProductInCart('Sauce Labs Backpack');

});