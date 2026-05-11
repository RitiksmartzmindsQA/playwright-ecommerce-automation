import { test } from '../../fixtures/baseTest';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import CheckoutOverviewPage from '../../pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../../pages/CheckoutCompletePage';

test('@regression positive checkout flow', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);
    const overviewPage = new CheckoutOverviewPage(loggedInPage);
    const completePage = new CheckoutCompletePage(loggedInPage);

    await test.step('Add backpack to cart', async () => {
        await inventoryPage.addBackpackToCart();
    });

    await test.step('Open cart page', async () => {
        await inventoryPage.goToCart();
    });

    await test.step('Verify cart page and start checkout', async () => {
        await cartPage.verifyCartPageLoaded();
        await cartPage.clickCheckout();
    });

    await test.step('Enter checkout details', async () => {
        await checkoutPage.fillCheckoutDetails('Ritik', 'QA', '110001');
        await checkoutPage.clickContinue();
    });

    await test.step('Verify checkout overview page', async () => {
        await overviewPage.verifyOverviewPageLoaded();
    });

    await test.step('Finish checkout order', async () => {
        await overviewPage.finishOrder();
    });

    await test.step('Verify order success', async () => {
        await completePage.verifyOrderSuccess();
    });
});

test('Negative empty first name checkout flow', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutDetails('', 'QA', '110001');
    await checkoutPage.clickContinue();

    await checkoutPage.assertCheckoutError('Error: First Name is required');
});

test('Negative empty last name checkout flow', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutDetails('Ritik', '', '110001');
    await checkoutPage.clickContinue();

    await checkoutPage.assertCheckoutError('Error: Last Name is required');
});

test('Negative empty postal code checkout flow', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutDetails('Ritik', 'QA', '');
    await checkoutPage.clickContinue();

    await checkoutPage.assertCheckoutError('Error: Postal Code is required');
});
