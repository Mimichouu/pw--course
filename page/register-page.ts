import { Page } from "@playwright/test";
import { MaterialBasePage } from './material-page'

export class RegisterPage extends MaterialBasePage {
    
    xpathUsername = '//input[@id="username"]';
    xpathEmail = '//input[@id="email"]';
    xpathGenderMale = '//input[@id="male"]';
    xpathGenderFemale = '//input[@id="female"]';
    getInfoNewestInTable: any;
    getxpathOptionHobby(hobby: "reading" | "traveling" | "cooking") {
         return `//input[@id='${hobby}']`
    }
    xpathSelectInterests = '//select[@id="interests"]';
    xpathSelectCountry = '//select[@id="country"]';
    xpathDob = '//input[@id="dob"]';
    xpathProfilePicture = '//input[@id="profile"]';
    xpathBio = '//textarea[@id="bio"]';
    xpathNewsletter = '//input[@id="newsletter"]';
    xpathBtnRegister = '//button[contains(text(),"Register")]';

    constructor(page: Page) {
        super(page)
    }

    async gotoRegisterPage() {
        await this.openMaterialPage();
        await this.gotoPage('Register Page');
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
        
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);

    }

    async checkGender(gender: "Male" | "Female") {
        if (gender == "Male") {
            await this.page.locator(this.xpathGenderMale).check();
        }
        if (gender == "Female") {
            await this.page.locator(this.xpathGenderFemale).check();
        }       
    }

    async checkHobbies(hobby: "reading" | "traveling" | "cooking") {
        await this.page.locator(this.getxpathOptionHobby(hobby)).check();
    }

    async selectInterests(interestsValue: "technology" | "science" | "art" | "music" | "sports") {
        await this.page.selectOption(this.xpathSelectInterests, interestsValue);
    }

    async selectCountry(countryValue: "usa" | "canada" | "uk" | "australia") {
        await this.page.selectOption(this.xpathSelectCountry, countryValue);
    }

    async fillDob(date: string) {
        await this.page.locator(this.xpathDob).fill(date);
    }

    async chooseFile(filePath: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
    }

    async fillBio(bio: string) {
        await this.page.locator(this.xpathBio).fill(bio);
    }

    async checkNewsletter() {
        await this.page.locator(this.xpathNewsletter).check();
    }

    async clickBtnRegister() {
        await this.page.locator(this.xpathBtnRegister).click();
    }

}