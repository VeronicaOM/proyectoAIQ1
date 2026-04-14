// Page Object: Checkboxes Page
// Generated with AI assistance (Claude / Cursor)

class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.checkbox1 = page.locator('#checkboxes input').first();
    this.checkbox2 = page.locator('#checkboxes input').nth(1);
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkCheckbox1() {
    await this.checkbox1.check();
  }

  async uncheckCheckbox2() {
    await this.checkbox2.uncheck();
  }

  async isCheckbox1Checked() {
    return this.checkbox1.isChecked();
  }

  async isCheckbox2Checked() {
    return this.checkbox2.isChecked();
  }
}

module.exports = CheckboxesPage;
