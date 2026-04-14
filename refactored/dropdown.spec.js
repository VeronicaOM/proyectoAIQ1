// Refactored test: Dropdown functionality using Page Object Model
// Migrated with AI assistance (Claude / Cursor)

const { test, expect } = require('@playwright/test');
const DropdownPage = require('./pages/DropdownPage');

test.describe('Dropdown Page', () => {
  let dropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigate();
  });

  test('select option 1 from dropdown', async () => {
    await dropdownPage.selectOption('1');
    await expect(dropdownPage.dropdown).toHaveValue('1');
  });

  test('select option 2 from dropdown', async () => {
    await dropdownPage.selectOption('2');
    await expect(dropdownPage.dropdown).toHaveValue('2');
  });

  test('default option is selected', async () => {
    const defaultText = await dropdownPage.getDefaultOptionText();
    expect(defaultText).toBe('Please select an option');
  });
});
