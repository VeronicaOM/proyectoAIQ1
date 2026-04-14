// Refactored test: Checkboxes functionality using Page Object Model
// Migrated with AI assistance (Claude / Cursor)

const { test, expect } = require('@playwright/test');
const CheckboxesPage = require('./pages/CheckboxesPage');

test.describe('Checkboxes Page', () => {
  let checkboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigate();
  });

  test('checkbox 1 can be checked', async () => {
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
    await checkboxesPage.checkCheckbox1();
    await expect(checkboxesPage.checkbox1).toBeChecked();
  });

  test('checkbox 2 can be unchecked', async () => {
    await expect(checkboxesPage.checkbox2).toBeChecked();
    await checkboxesPage.uncheckCheckbox2();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  });

  test('both checkboxes can be toggled', async () => {
    await checkboxesPage.checkCheckbox1();
    await checkboxesPage.uncheckCheckbox2();
    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  });
});
