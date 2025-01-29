const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#email";
    this.passwordInput = '//input[@placeholder="Password"]';
    this.loginButton = '//button[@id="submit"]';
    this.logOut = '//button[@id="logout"]';
    this.loginValidation =
      '//p[contains(text(), "Click on any contact to view the Contact Details")]';
    this.alertMassage = '//span[@id="error"]';
  }

  async login(userName, password) {
    await this.page.locator(this.usernameInput).fill(userName);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin() {
    const LoginValidation = await this.page.locator(this.loginValidation);
    expect(this.logOut).toBeVisible;
    await expect(LoginValidation).toHaveText(
      "Click on any contact to view the Contact Details"
    );
  }

  async verifyInvalidLogin() {
    const alertMassage = await this.page.locator(this.alertMassage);
    await expect(alertMassage).toHaveText("Incorrect username or password");
  }
};
