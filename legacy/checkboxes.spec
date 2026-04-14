const { test, expect } = require('@playwright/test');

test('checkbox 1 can be checked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('#checkboxes input').first();
  await expect(checkbox1).not.toBeChecked();
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});

test('checkbox 2 can be unchecked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox2 = page.locator('#checkboxes input').nth(1);
  await expect(checkbox2).toBeChecked();
  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();
});

test('both checkboxes can be toggled', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('#checkboxes input').first();
  const checkbox2 = page.locator('#checkboxes input').nth(1);
  await checkbox1.check();
  await checkbox2.uncheck();
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).not.toBeChecked();
});
