import {test, expect} from '@playwright/test';

test.describe('Auth - Authentication', async () => {

        let invalid = {
            username: 'Haha',
            password: '123123'
        };

        let valid = {
            username: 'k14-hang',
            password: 'zZ2H#GD$&Hp3oNrT5V*1oPl2'
        };

        let xpath = {
            userName: '//input[@id="user_login"]',
            password: '//input[@id="user_pass"]',
            BtnLogIn: '//input[@id="wp-submit"]',
            ErrMsg: '//div[@id="login_error"]//p',
            HeadDashboard: '//h1[text()="Dashboard"]',
            HeadAtaGlance: '//h2[text()="At a Glance"]',
            HeadActivity: '//h2[text()="Activity"]'
        };


    test.beforeEach(async ({page}) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    });


    test('@AUTH_001 - Login fail', async ({page}) => {
        await test.step('Nhập vào thông tin username, passwword bị sai', async () => {
            // Nhập thông tin username, password bị sai
            await page.locator(xpath.userName).fill(invalid.username);
            await page.locator(xpath.password).fill(invalid.password);

            // Giá trị của username, password được điền vào ô input
            const actualUsername = await page.locator(xpath.userName).inputValue();
            const actualPassword = await page.locator(xpath.password).inputValue();

            expect(actualUsername).toEqual(invalid.username);
            expect(actualPassword).toEqual(invalid.password);
        });

        await test.step('Clisk button Login', async () => {
            // Click button login
            await page.locator(xpath.BtnLogIn).click();

            // Hiển thị lỗi
            const expMsg = `Error: The username ${invalid.username} is not registered on this site. If you are unsure of your username, try your email address instead.`

            await expect(page.locator(xpath.ErrMsg)).toHaveText(expMsg);
        });
    });

    test('@AUTH_002 - Login success', async ({page}) => {
        await test.step('Nhập thông tin username, password đúng', async () => {
            // Nhập thông tin username, password đúng
            await page.locator(xpath.userName).fill(valid.username);
            await page.locator(xpath.password).fill(valid.password);

            // Giá trị của username, password được điền vào ô input
            const actualUserName = await page.locator(xpath.userName).inputValue();
            const actualPassWord = await page.locator(xpath.password).inputValue();

            expect(actualUserName).toEqual(valid.username);
            expect(actualPassWord).toEqual(valid.password);
        });

        await test.step('Click button Login', async () => {
            // Click button login
            await page.locator(xpath.BtnLogIn).click();

            // Chuyển tới trang có url là /wp-admin
            await expect(page).toHaveURL(/.*wp-admin/);

            // Hiển thị heading 1 - Dashboard
            await expect(page.locator(xpath.HeadDashboard)).toBeVisible();

            // Hiển thị heading 2 - At a Glance và Activity
            await expect(page.locator(xpath.HeadAtaGlance)).toBeVisible();
            await expect(page.locator(xpath.HeadActivity)).toBeVisible();

        });
    });

});