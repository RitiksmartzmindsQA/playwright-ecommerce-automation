import { expect } from '@playwright/test';

class CartPage {
    constructor(page) {
        this.page = page;

        this.cartTitle = page.locator('.title');
        this.productName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
    }

    async verifyCartPageLoaded() {
        await expect(this.cartTitle).toHaveText('Your Cart');
    }

    async verifyProductInCart(productName) {
        await expect(this.productName).toHaveText(productName);
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

export default CartPage;