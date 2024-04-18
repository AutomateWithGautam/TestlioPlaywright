const { test } = require('@playwright/test')

//test.describe.configure({mode: 'parallel'}); // to run tests in parellel mode if you have multiple test right now we only have one test below.
test('@flow Testing flow' , async({ page }) => {

    const context = await page.context();
    await context.clearCookies(); // Clear cookies from the context

    await page.goto("https://www.google.com/");
    await page.getByRole("combobox").fill("albert invent");
    await page.keyboard.press("Enter");
    //await page.waitForEvent('load');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link' , {name: 'Albert Invent: Expedite'}).click();
    await page.getByRole('link' , {name: 'Request Demo'}).click();
    await page.waitForTimeout(3000)

});



