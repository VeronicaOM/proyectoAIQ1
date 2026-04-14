// Page Object: Login Page
// Generated with AI assistance (Claude / Cursor)

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.subheader = page.locator('.subheader');
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async getFlashMessage() {
    return this.flashMessage.textContent();
  }
}

module.exports = LoginPage;
