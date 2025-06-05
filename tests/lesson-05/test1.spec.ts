
import {test} from '@playwright/test';

const date = '2025-05-06';
const username = "Playwright Việt Nam";
const email = 'playwrightvietnam@gmail.com';
const description = 'Đây là lớp PW K14';
const country = 'usa';

test('Click vào Bài học 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('//a[@href="01-xpath-register-page.html"]').click();

    await page.locator('//input[@id="username"]').fill(username);

    await page.locator('//input[@id="email"]').fill(email);

    await page.locator('//input[@id="male"]').check();

    await page.locator('//input[@id="traveling"]').check();

    await page.locator('//select[@id="country"]').selectOption(country);

    await page.locator('//input[@id="dob"]').fill(date);

    await page.locator('//input[@id="profile"]').setInputFiles(`data-test/anhconmeo.jpg`);

    await page.locator('//textarea[@id="bio"]').fill(description);

    await page.locator('//input[@id="rating"]').fill('10');

    await page.locator('//input[@id="favcolor"]').fill('#00fffb');

    await page.locator('//div[@class="tooltip"]').hover();

    await page.locator('//input[@id="newsletter"]').check();

    await page.click('//span[@class="slider round"]');

    await page.locator('//button[normalize-space()="Register"]').click();


}); 


