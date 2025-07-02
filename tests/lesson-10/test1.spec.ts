import {test, expect} from "@playwright/test";
import { RegisterPage } from "../../page/register-page";

let date = '2025-05-06';
let username = "Playwright Việt Nam";
let email = 'playwrightvietnam@gmail.com';
let description = 'Đây là lớp PW K14';

test('Exercise 1: Register Page', async ({page}) => {
    let registerPage = new RegisterPage(page)

    await test.step('Truy cập vào Register Page', async () => {
        await registerPage.gotoRegisterPage();
    })

    await test.step('Điền thông tin và click button Register', async () => {
        await registerPage.fillUsername(username);
        await registerPage.fillEmail(email);
        await registerPage.checkGender('Female');
        await registerPage.checkHobbies('traveling');
        await registerPage.selectInterests('music');
        await registerPage.selectCountry('canada');
        await registerPage.fillDob(date);
        await registerPage.chooseFile('data-test/anhconmeo.jpg');
        await registerPage.fillBio(description);
        await registerPage.checkNewsletter();
        await registerPage.clickBtnRegister();
    })

    await test.step('Verify thông tin vừa input là đúng', async () => {
        const userInfo = await registerPage.getInfoNewestInTable();
        const actualUsername = userInfo.username;
        const actualEmail = userInfo.email;
        const actualInformation = userInfo.information;

        expect(actualUsername).toBe(username);
        expect(actualEmail).toBe(email);
        expect(actualInformation).toContain('Female');
        expect(actualInformation).toContain('traveling');
        expect(actualInformation).toContain('musin');
        expect(actualInformation).toContain('canada');
        expect(actualInformation).toContain(date);
        expect(actualInformation).toContain(description);
        expect(actualInformation).toContain('Yes');
    })
})
       