import { expect } from '@playwright/test';

class CheckoutCompletePage {
    constructor(page) {
        this.page = page;

        this.successMessage = page.locator('.complete-header');
    }

    async verifyOrderSuccess() {
        await expect(this.successMessage).toHaveText('Thank you for your order!');
    }
}

export default CheckoutCompletePage;
