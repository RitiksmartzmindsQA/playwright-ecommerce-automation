import { expect } from '@playwright/test';

class LoginPage {

    constructor(page) {
        this.page = page;
        
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productTitle = page.getByText('products');
    }

    async open() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory\.html/);
        await expect(this.productTitle).toBeVisible();
    }
}

export default LoginPage;

