import { expect } from '@playwright/test';

class CheckoutOverviewPage {
    constructor(page) {
        this.page = page;

        this.finishButton = page.locator('#finish');
        this.title = page.locator('.title');
    }

    async verifyOverviewPageLoaded() {
        await expect(this.title).toHaveText('Checkout: Overview');
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}

export default CheckoutOverviewPage;