const {test, expect} = require('@playwright/test');

test('test', async ({browser}) => {
    // Go to https://virtualspeech.com/tools/text-to-speech-converter
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://appexchange.salesforce.com/consulting');

    var i = 0;
    while (i < 1) {
        await page.locator("#appx-load-more-button-id").click();
        await page.waitForLoadState('networkidle');
        i = i + 1;

    }

    // company name
    // appexchange listing url
    // certified experts
    // projects completed
    // rating (1-5) value
    // Number of Reviews
    // Founded year
    // Headquarters city
    // headquarters state
    // headquarters country
    // website
    // domain (just domain without https or www like opero.com)
    // email
    // phone


    const table_results = page.locator(".appx-tile.appx-tile-consultant.tile-link-click");
    await page.waitForLoadState('networkidle');
    const count = await table_results.count();

    const newPage = await context.newPage();
    
    for (let i = 0; i< 1; i++) {
        const href = await table_results.nth(i).getAttribute("href");
        newPage.goto(href);
        await newPage.waitForLoadState('networkidle');

        // await newPage.waitForSelector(".slds-section__title.appx-section__title");

        const companyNameLocator = newPage.locator(".slds-section__title.appx-section__title");
        const companyName = await companyNameLocator.last().textContent();
        const company = companyName.split(' ')[1];

        const elements4 = newPage.locator(".appx-summary-bar_facts-value");

        const completedProjects = await elements4.nth(1).textContent();
        const certifiedExperts = await elements4.nth(2).textContent();
        const foundedYear = await elements4.nth(3).textContent();
        const email = await newPage.locator("a[data-event='listing-publisher-email']").textContent();
        const website = await newPage.locator("a[data-event='listing-publisher-website']").textContent();
        const phone = await newPage.locator("div[class='appx-extended-detail-subsection-description']").textContent();


        await newPage.locator("#tab-default-2__item").click();
        await newPage.waitForLoadState('networkidle');

        await newPage.waitForSelector(".appx-average-rating-numeral");
        await newPage.waitForSelector(".appx-extended-detail-review-count");

        const rating = await newPage.locator(".appx-average-rating-numeral").textContent();


        const reviews = await newPage.locator(".appx-extended-detail-review-count").textContent();
        const headquartersSelector = newPage.locator(".appx-extended-detail-subsection-description.slds-truncate");
        // const textContents = await headquartersSelector.allTextContents();
        // textContents.forEach(_trim);
        // const headquarters = textContents[0].trim();
        console.log(company);
        console.log(certifiedExperts);
        console.log(completedProjects);
        console.log(rating);
        console.log(reviews);
        console.log(foundedYear);
        console.log(website);
        console.log(email);
        console.log(phone);
    }



    await page.pause();


    
    

    
    // Go to https://virtualspeech.com/tools/text-to-speech-converter
  });

function _trim(item) {
    item.trim();
} 