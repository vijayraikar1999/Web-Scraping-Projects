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
    
    await page.pause();

    const count = await products.count();
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

    await page.locator("[routerlink*='cart']").click();
    const isThere = page.locator("h3:has-text('zara coat 3')").isVisible();
    expect(isThere).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").type("ind", {delay: 100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();
    for(let i = 0; i < optionCount; i++) {
        const text = dropdown.locator("button").nth(i).textContent();
        if (text === ' India') {
            // click
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    await expect(page.locator(".user__name input[type='text']")).toHaveText(email);
    page.locator(".action__submit").click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();

    const tabelRow = page.locator("tbody tr");
    
    const tableRowsCount = await page.locator("tbody tr").count();

    for(let i = 0; i < tableRowsCount; i++) {
        const rowId = tableRow.nth(i).locator("th").textContent();
        if (rowId === orderId) {
           await tabelRow.nth(i).locator("button.btn-primary").click();
           break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();





    await page.pause();

} );

