import { expect } from '@playwright/test';

class CartPage {
    constructor(page) {
        this.page = page;

        this.cartTitle = page.locator('.title');
        this.productName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.cartItems = page.locator('.cart_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
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

    async removeProductFromCart() {
        await this.removeButton.click();
    }

    async verifyCartIsEmpty() {
        await expect(this.cartItems).toHaveCount(0);
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async verifyCartBadgeCount(count) {
        await expect(this.cartBadge).toHaveText(count);
    }
}

export default CartPage;
