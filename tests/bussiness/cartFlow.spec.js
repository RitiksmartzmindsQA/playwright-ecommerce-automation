import { test } from '../../fixtures/baseTest';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

test('Verify product added to cart and verify cart badge updated correctly', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await cartPage.verifyCartBadgeCount('1');
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyProductInCart('Sauce Labs Backpack');

});

test('Check zero count on empty cart', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.removeProductFromCart();
    await cartPage.verifyCartIsEmpty();

});

test('Verify continue shopping redirects to inventory page', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickContinueShopping();
    await inventoryPage.verifyInventoryPageLoaded();

});