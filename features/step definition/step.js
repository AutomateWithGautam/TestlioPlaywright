import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium } from 'playwright';

let page;

Given('I am on the Google homepage', async function () {
    const browser = await chromium.launch();
    page = await browser.newPage();
  });


When('I search for {string}', async function (searchTerm) {
  await page.getByRole('combobox').fill(searchTerm);
  await page.keyboard.press('Enter');
});

When('I click on the Testlio link', async function () {
  await page.getByRole('link', { name: 'Testlio: Your Trusted' }).click();
});

When('I click on {string}', async function (buttonText) {
  await page.getByText(buttonText).click();
});

Then('I should see the freelance application form', async function () {
  await page.waitForEvent('load');
  const button = await page.$('a.button:has-text("Apply to freelance")');
  const buttonText = await button.textContent();
  console.log('Button text:', buttonText);
  expect(button).not.toBeNull();
});
