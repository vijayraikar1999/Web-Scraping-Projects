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

    const products = page.locator(".card-body");
    const productName = 'zara coat 3';
    
    // await page.pause();
    

    const count = await products.count();
    console.log(count);
    console.log(count);

    for(let i = 0; i < count; i++) {
        const product = await products.nth(i).locator("b").textContent();
        console.log(product);
        if (product === productName) {
            // add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            console.log("Product found.");
            break;

        }
    }

    await page.pause();
    
} );

