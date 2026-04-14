
const { test, expect } = require('@playwright/test');

test('select option 1 from dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
});

test('select option 2 from dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('2');
  await expect(page.locator('#dropdown')).toHaveValue('2');
});

test('default option is selected', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const selectedOption = page.locator('#dropdown option[selected]');
  await expect(selectedOption).toHaveText('Please select an option');
});
