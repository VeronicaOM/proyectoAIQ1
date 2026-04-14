
const { test, expect } = require('@playwright/test');

test('successful login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await expect(page.locator('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
});

test('failed login with invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('invaliduser');
  await page.locator('#password').fill('wrongpassword');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});

test('logout after successful login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  await page.locator('a[href="/logout"]').click();
  await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});
