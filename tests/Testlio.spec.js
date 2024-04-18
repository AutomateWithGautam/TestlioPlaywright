const {test, expect} = require('@playwright/test');
const { link } = require('fs');


test('test if apply freelance in page' , async({page}) => {

  await page.goto("https://www.google.com/");
  //process.exit(0)
  await page.getByRole('combobox').fill('testlio');
  await page.keyboard.press("Enter");

  await page.getByRole('link' , { name: 'Testlio: Your Trusted'}).click();
  //await page.getByLabel('Search', { exact: true }).fill('testlio');
  await page.getByText('Apply to freelance').click();

  await page.waitForEvent('load')
 
  const button  = await page.getByRole('link', { name: 'Apply to freelance'})
  const buttonText = await button.textContent();
  console.log('Button text:', buttonText);
  expect(button).not.toBeNull();

});