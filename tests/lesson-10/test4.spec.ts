import { test, expect } from "@playwright/test";
import { PersonalNotes } from "../../page/personal-notes-page";

test('Exercise 4: Personal notes', async ({page}) => {
    let personalNote = new PersonalNotes(page);

    const notes = [
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 2" },
        { title: "Title 3", content: "Content 3" },
        { title: "Title 4", content: "Content 4" },
        { title: "Title 5", content: "Content 5" },
        { title: "Title 6", content: "Content 6" },
        { title: "Title 7", content: "Content 7" },
        { title: "Title 8", content: "Content 8" },
        { title: "Title 9", content: "Content 9" },
        { title: "Title 10", content: "Content 10" },
    ];

    await test.step('Truy cập trang Personal notes', async () => {
        await personalNote.gotoPersonalNotes();    
    })

    await test.step('Tạo note', async () => {
        for (const note of notes) {
            await personalNote.fillTitle(note.title);
            await personalNote.fillContent(note.content);
            await personalNote.clickAddNotes();
        }    
    })
    
    await test.step('Search theo title bất kỳ', async () => {
        await personalNote.searchNotes('Title 7');
    })

    await test.step('Kiểm tra tất cả notes search được đều chứa keyword đã tìm kiếm', async () => {
        const listTitles = await personalNote.getAllTitleInList();
        for (let i = 0; i < listTitles.length; i++) {
            expect(listTitles[i]).toContain('Title 7');
        }
    })
})