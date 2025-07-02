import { Page } from "@playwright/test";
import { MaterialBasePage } from "./material-page";

export class PersonalNotes extends MaterialBasePage {

    xpathNoteTitle = '//input[@id="note-title"]';
    xpathNoteContent = '//textarea[@id="note-content"]';
    xpathBtnAddNote = '//button[@id="add-note"]';
    xpathSearchNote = '//input[@type="text" and @id="search"]';


    constructor(page: Page) {
        super(page)
    }

    async gotoPersonalNotes() {
        await this.openMaterialPage();
        await this.gotoPage('Personal notes');
    }


    async fillTitle(title: string) {
        await this.page.locator(this.xpathNoteTitle).fill(title);
    }

    async fillContent(content: string) {
        await this.page.locator(this.xpathNoteContent).fill(content);
    }    
    
    async clickAddNotes() {
        await this.page.locator(this.xpathBtnAddNote).click();
    }

    async searchNotes(note: string) {
        await this.page.locator(this.xpathSearchNote).fill(note);
    }

    async getAllTitleInList() {
        let listTitles: string[] = [];
        const countTitles = await this.page.locator('//ul/li/descendant::strong').count();
        for (let i = 1; i <= countTitles; i++) {
            let title = await this.page.locator(`(//ul/li/descendant::strong)[${i}]`).textContent();
            listTitles.push(title || "");
        }
        return listTitles;
    }        
}
