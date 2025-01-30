const { expect } = require("@playwright/test");

exports.ContactPage = class ContactPage {
  constructor(page) {
    this.page = page;
    this.addContact = '//button[@id="add-contact"]';
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.dob = '//input[@placeholder="yyyy-MM-dd"]';
    this.email = '//input[@id="email"]';
    this.phone = '//input[@id="phone"]';
    this.address1 = '//input[@placeholder="Address 1"]';
    this.address2 = '//input[@placeholder="Address 2"]';
    this.city = '//input[@placeholder="City"]';
    this.state = '//input[@placeholder="State or Province"]';
    this.postalCode = '//input[@placeholder="Postal Code"]';
    this.country = '//input[@placeholder="Country"]';
    this.Save = '//button[@id="submit"]';

    this.savedFirstName = '//span[@id="firstName"]';
    this.savedLastName = '//span[@id="lastName"]';
    this.savedDob = '//span[@id="birthdate"]';
    this.savedEmail = '//span[@id="email"]';
    this.savedPhone = '//span[@id="phone"]';
    this.savedAddress1 = '//span[@id="address1"]';
    this.savedAddress2 = '//span[@id="address2"]';
    this.savedCity = '//span[@id="city"]';
    this.savedState = '//span[@id="state"]';
    this.savedPostalCode = '//span[@id="postalCode"]';
    this.savedCountry = '//span[@id="country"]';

    this.viewCreatedContact = '//button[@id="view-contact"]';
  }

  async contactAdd(
    firstName,
    lastName,
    dob,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    postalCode,
    country
  ) {
    await this.page.locator(this.addContact).click();
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.dob).fill(dob);
    await this.page.locator(this.email).fill(email);
    await this.page.locator(this.phone).fill(phone);
    await this.page.locator(this.address1).fill(address1);
    await this.page.locator(this.address2).fill(address2);
    await this.page.locator(this.city).fill(city);
    await this.page.locator(this.state).fill(state);
    await this.page.locator(this.postalCode).fill(postalCode);
    await this.page.locator(this.country).fill(country);
    await this.page.locator(this.Save).click();
  }

  async validateContactCreated(
    firstName,
    lastName,
    dob,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    postalCode,
    country
  ) {
    const fnameValidation = await this.page.locator(this.savedFirstName);
    const lnameValidation = await this.page.locator(this.savedLastName);
    const dobValidation = await this.page.locator(this.savedDob);
    const emailValidation = await this.page.locator(this.savedEmail);
    const phoneValidation = await this.page.locator(this.savedPhone);
    const address1Validation = await this.page.locator(this.savedAddress1);
    const address2Validation = await this.page.locator(this.savedAddress2);
    const cityValidation = await this.page.locator(this.savedCity);
    const stateValidation = await this.page.locator(this.savedState);
    const postalCodeValidation = await this.page.locator(this.savedPostalCode);
    const countryValidation = await this.page.locator(this.savedCountry);

    await expect(fnameValidation).toHaveText(firstName);
    await expect(lnameValidation).toHaveText(lastName);
    await expect(dobValidation).toHaveText(dob);
    await expect(emailValidation).toHaveText(email);
    await expect(phoneValidation).toHaveText(phone);
    await expect(address1Validation).toHaveText(address1);
    await expect(address2Validation).toHaveText(address2);
    await expect(cityValidation).toHaveText(city);
    await expect(stateValidation).toHaveText(state);
    await expect(postalCodeValidation).toHaveText(postalCode);
    await expect(countryValidation).toHaveText(country);
  }

  async viewContact() {
    await this.page.locator(this.viewCreatedContact).click();
  }
};
