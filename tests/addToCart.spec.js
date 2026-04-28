import { test } from '../fixtures/baseTest';
import InventoryPage from '../pages/InventoryPage';

test('@smoke Add product to cart', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyCartBadge('1');
    
});
