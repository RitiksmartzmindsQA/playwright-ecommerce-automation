import { test } from '../../fixtures/baseTest';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

let inventoryPage;
let cartPage;

test.beforeEach(async ({ loggedInPage }) => {
    inventoryPage = new InventoryPage(loggedInPage);
    cartPage = new CartPage(loggedInPage);
});

test('Verify product added to cart and verify cart badge updated correctly', async ({
    loggedInPage,
}) => {
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await cartPage.verifyCartBadgeCount('1');
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyProductInCart('Sauce Labs Backpack');
});

test('Check zero count on empty cart', async ({ loggedInPage }) => {
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.removeProductFromCart();
    await cartPage.verifyCartIsEmpty();
});

test('Verify continue shopping redirects to inventory page', async ({
    loggedInPage,
}) => {
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickContinueShopping();
    await inventoryPage.verifyInventoryPageLoaded();
});
