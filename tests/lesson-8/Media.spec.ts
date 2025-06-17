import {test, expect} from '@playwright/test';

test.describe('MEDIA - @MEDIA_FILE_001', async () => {

    let valid = {
        username: 'k14-hang',
        password: 'zZ2H#GD$&Hp3oNrT5V*1oPl2'
    };


    let xpath = {
        userName: '//input[@id="user_login"]',
        password: '//input[@id="user_pass"]',
        BtnLogIn: '//input[@id="wp-submit"]',
        MenuMedia: '//li[@id="menu-media"]',
        BtnAddMediaFile: '//a[@role="button"]',
        BtnSelectFile: '//button[@type="button"]',
        InputFile: '//input[@type="file"]',
        fileName: '//li[@aria-label="hang"]', 
        BtnDeleteFile: '//button[@type="button"]'
    };

    
    test.beforeEach(async ({page}) => {
        await test.step('Login và vào menu category', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
            await page.locator(xpath.userName).fill(valid.username);
            await page.locator(xpath.password).fill(valid.password);
            await page.locator(xpath.BtnLogIn).click();
            await page.locator(xpath.MenuMedia).click();
        });

        page.on('dialog', async dialog => {
            await dialog.accept();
        });
    });


    test('Media-upload file success', async ({page}) => {

        const filePath = 'tests/lesson-8/hang.txt';

        // Thực hiện upload ảnh
        await test.step('upload ảnh', async () => {
            await page.click(xpath.BtnAddMediaFile);
            await page.locator(xpath.InputFile).setInputFiles(filePath);
            });
    
        // F5 trang
        await test.step('f5 trang', async () => {
            await page.reload();
            await expect(page.locator(xpath.fileName)).toBeVisible({timeout: 10000});
        });

        // xóa dữ liệu
        await test.step('Xóa dữ liệu', async () => {
            await page.locator(xpath.fileName).click();
            await page.locator(xpath.BtnDeleteFile).click();
            await expect(page.locator(xpath.fileName)).not.toBeVisible();
        });
    });
});