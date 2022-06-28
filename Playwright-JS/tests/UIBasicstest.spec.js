const {test, expect} = require('@playwright/test');

test('First Playwright test', async ({browser})=> {
    // chrome - plugins/ cookies

    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    // css, xpath
    await userName.type("rahulshettyacemy");
    await page.locator("#password").type("learning");
    await signIn.click();
    // wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    // type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

} );

test('Browser Context Playwright test 2', async ({browser})=> {
    // chrome - plugins/ cookies

    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    // css, xpath
    await userName.type("rahulshettyacemy");
    await page.locator("#password").type("learning");
    await signIn.click();
    // wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    // type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    
    // Race Condition
    await Promise.all(
        [
            page.waitForNavigation(),
            signIn.click(),
        ]
    );

    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);



    

    



} );

test('Register Playwright test', async ({browser})=> {
    // chrome - plugins/ cookies

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://www.rahulshettyacademy.com/client');

    await page.locator('text=Register here').click();


    // Find out the buttons and fields.
    firstName = page.locator("#firstName");
    lastName = page.locator("#lastName");
    userEmail = page.locator("#userEmail");
    userMobile = page.locator("#userMobile");
    occupationSelector = page.locator('select');
    genderCheckRadio = page.locator('input[type="radio"]');
    password = page.locator("#userPassword");
    confirmPassword = page.locator("#confirmPassword");
    ageCheckbox = page.locator('input[type="checkbox"]')
    registerButton = page.locator('input:has-text("Register")');


    // Performing clicking and filling acttions

    await firstName.fill("firstname")
    await lastName.fill("lastname");
    await userEmail.fill("email123@gmail.com");
    await userMobile.fill("1234567891");
    await occupationSelector.selectOption("3: Engineer");
    await genderCheckRadio.first().check();
    await password.fill("password");
    await confirmPassword.fill("password");
    await ageCheckbox.check();
    await registerButton.click();
    
} );

