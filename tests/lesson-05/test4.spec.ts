import {test} from '@playwright/test';

test ('Click vào Bài học 3', async ({page}) => {
    await test.step('Đi đến trang Personal notes', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step('Thêm mới 10 note', async () => {
        const notes = [
            { title: "Aaaaaaaaaaaaaa", content: "Lalalalalalala" },
            { title: "Bbbbbbbbbbbbbb", content: "Bobobobobobobo" },
            { title: "Cccccccccccccc", content: "Cecececececece" },
            { title: "Dddddddddddddd", content: "Dididididididi" },
            { title: "Eeeeeeeeeeeeee", content: "Enenenenenenen" },
        ];

        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    await test.step('Search theo tiêu đề', async () => {
        await page.locator('//input[@type="text" and @id="search"]').fill('A');
    })

});