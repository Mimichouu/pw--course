import {test} from '@playwright/test';

test ('Click vào Bài học 2', async ({ page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('//a[@href="02-xpath-product-page.html"]').click();

    await page.locator('//button[@data-product-id="1"]').dblclick();

    await page.locator('//button[@data-product-id="2"]').click({clickCount: 3});

    await page.locator('//button[@data-product-id="3"]').click();
    
});