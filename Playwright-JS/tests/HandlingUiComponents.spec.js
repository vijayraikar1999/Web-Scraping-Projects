const {test, expect} = require('@playwright/test');

test('handling static select dorpdown options', async ({page})=> {
  
    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');

    const userName = page.locator("#userName");
    const password = page.locator("password");
    const signInButton = page.locator("#signInBtn");

    const documentLInk = page.locator("[href*='documents-request']");

    const dorpdown = page.locator("select.form-control");

    await dorpdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLInk).toHaveAttribute("class", "blinkingText");

    // assertion
    await page.pause();
    
} );

test('Handling Child Windows & Tabs by Browser Context', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
  
    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    const documentLInk = page.locator("[href*='documents-request']");

    const userName = page.locator("#username");

    
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLInk.click(),
        ]
    );

    const text = await newPage.locator(".red").textContent();

    const arrayText =  text.split("@");
    const domain = arrayText[1].split(" ")[0];

    // console.log(domain);

    await userName.type(domain.split(".")[0]);
    console.log(await userName.textContent());
    await page.pause();
    
    
} );

