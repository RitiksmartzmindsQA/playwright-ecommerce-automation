import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import loginData from '../../test-data/loginData.json';

test('@smoke Positive login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await loginPage.assertLoginSuccess();

});

test('Negative login with invalid username and password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );

  await loginPage.assertLoginError(
    'Epic sadface: Username and password do not match any user in this service'
  );

});

test('Negative login with empty username', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    loginData.emptyUsername.username,
    loginData.emptyUsername.password
  );

  await loginPage.assertLoginError(
    'Epic sadface: Username is required'
  );

});

test('Negative login with empty password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    loginData.emptyPassword.username,
    loginData.emptyPassword.password
  );

  await loginPage.assertLoginError(
    'Epic sadface: Password is required'
  );

});

test('Negative login with locked out user', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    'locked_out_user',
    'secret_sauce'
  );

  await loginPage.assertLoginError(
    'Epic sadface: Sorry, this user has been locked out.'
  );

});