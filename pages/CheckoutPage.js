import { expect } from '@playwright/test';

class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');

        this.errorMessage = page.locator('[data-test="error"]');
    }

    async fillCheckoutDetails(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async assertCheckoutError(expectedMessage) {
        await expect(this.errorMessage).toBeVisible();

        await expect(this.errorMessage).toHaveText(expectedMessage);
    }
}

export default CheckoutPage;
