import { expect } from '@playwright/test';

class InventoryPage {
    constructor(page) {
        this.page = page;

        this.productTitle = page.locator('.title');
        this.backpackAddButton = page.locator(
            '#add-to-cart-sauce-labs-backpack',
        );
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async verifyInventoryPageLoaded() {
        await expect(this.productTitle).toHaveText('Products');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async verifyCartBadge(count) {
        await expect(this.cartBadge).toHaveText(count);
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

export default InventoryPage;
