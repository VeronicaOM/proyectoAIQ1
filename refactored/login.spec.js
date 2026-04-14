// Refactored test: Login functionality using Page Object Model
// Migrated with AI assistance (Claude / Cursor)

const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

test.describe('Login Page', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('successful login with valid credentials', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    await expect(loginPage.subheader).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
  });

  test('failed login with invalid credentials', async () => {
    await loginPage.login('invaliduser', 'wrongpassword');
    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });

  test('logout after successful login', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    await loginPage.logout();
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});
