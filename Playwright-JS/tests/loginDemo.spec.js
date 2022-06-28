const {test, expect} = require('@playwright/test');

test('Login Playwright test', async ({browser})=> {
    // chrome - plugins/ cookies

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://www.rahulshettyacademy.com/client');

    await page.locator("#userEmail").fill("username@gmail.com");
    await page.locator("#userPassword").fill("Password@@@@@123");
    await page.locator("[value='Login']").click();

    // wait until network is idle
    await page.waitForLoadState('networkidle');

    const titles = await page.locator(".card-body b").allTextContents();

    console.log(titles);
    
} );

