import {test} from '@playwright/test';

test ('Click vào Bài học 3', async ({page}) => {
    await test.step('Đi đến trang Todo list', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })
   
    await test.step('Thêm mới 100 todo item có nội dung "Todo <i>"', async () => {
        for (let i = 1; i <= 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//button[@id="add-task"]').click();
        }
    })

    await test.step('Xóa các todo có số lẻ', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        })

        for(let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    })
});