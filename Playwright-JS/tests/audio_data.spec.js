// const {test, expect} = require('@playwright/test');

// test('test', async ({ page }) => {
//     // Go to https://virtualspeech.com/tools/text-to-speech-converter
//     await page.goto('https://virtualspeech.com/tools/text-to-speech-converter');
//     // Click textarea[name="text"]
//     await page.locator('textarea[name="text"]').click();
//     // Fill textarea[name="text"]
//     await page.locator('textarea[name="text"]').type('There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.');
//     // Check #female
//     await page.locator('#female').check();
//     // Click text=Submit
//     await page.locator('text=Submit').click();

//     // Click text=Right-click here and choose 'Save link as' to download
//     await page.locator('text=Right-click here and choose \'Save link as\' to download').click();
//     const url = page.url();
//     console.log(url);

//     await page.locator('html').click();
//   // Press s with modifiers
//     await page.locator('body').press('Control+s');
//     // Go to https://virtualspeech.com/tools/text-to-speech-converter
//   });