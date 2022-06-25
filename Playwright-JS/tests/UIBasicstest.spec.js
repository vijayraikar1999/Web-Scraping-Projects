const {test, expect} = require('@playwright/test');

test.only('First Playwright test', async ({browser})=> {
    // chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    // css, xpath
    await page.locator("#username").type("rahulshettyacemy")
    await page.locator("#password").type("learning");
    await page.locator("#signInBtn").click();
    // wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    

    



} );

test('Page Playwright test', async ({page})=> {
    // chrome - plugins/ cookies
    // const context = await browser.newContext();
    // const page = context.newPage();

    await page.goto('https://www.google.com');
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


} );

