import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test('SauceDemo login using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await loginPage.assertLoginSuccess();

});

