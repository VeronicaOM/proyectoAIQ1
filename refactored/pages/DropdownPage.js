// Page Object: Dropdown Page
// Generated with AI assistance (Claude / Cursor)

class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
    this.selectedOption = page.locator('#dropdown option[selected]');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption(value) {
    await this.dropdown.selectOption(value);
  }

  async getSelectedValue() {
    return this.dropdown.inputValue();
  }

  async getDefaultOptionText() {
    return this.selectedOption.textContent();
  }
}

module.exports = DropdownPage;
