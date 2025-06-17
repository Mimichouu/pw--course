import {test, expect} from '@playwright/test';

let valid = {
    username: 'k14-hang',
    password: 'zZ2H#GD$&Hp3oNrT5V*1oPl2'
};

let validTagName = 'Hang';

let invalidTagName = 'lesson tag';

let xpath = {
    userName: '//input[@id="user_login"]',
    password: '//input[@id="user_pass"]',
    BtnLogIn: '//input[@id="wp-submit"]',
    MenuPost: '//li[@id="menu-posts"]',
    PostTags: '//a[text()="Tags"]',
    PostCategories: '//a[text()="Categories"]',
    BtnAddTag: '//input[@value="Add Tag"]',
    BtnAddCategory: '//input[@value="Add Category"]',
    MsgRequired: '//p[text()="A name is required for this term."]',
    MsgNameExist: '//p[text()="A term with the name provided already exists in this taxonomy."]',
    MsgTagAdded: '//p[text()="Tag added."]',
    MsgCategoryAdded: '//p[text()="Category added."]',
    TagName: '//input[@id="tag-name"]',
    TagSlug: '//input[@id="tag-slug"]',
    ParentCategory: '//select[@id="parent"]',

};     

function getXpathTagNameInTable(name: string) {
    return `//tbody//a[contains(text(),'${name}')]`;
}

function getXpathSlugNameInTable(slug: string) {
    return `//td[text()='${slug}']`;
}

function getXpathBtnDelete(name: string) {
    return `//a[@aria-label='Delete “${name}”']`;
}


test.describe('@POST_TAG_001 - Add tags failed', async () => {
    
    test.beforeEach(async ({page}) => {
        await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
        await page.locator(xpath.userName).fill(valid.username);
        await page.locator(xpath.password).fill(valid.password);
        await page.locator(xpath.BtnLogIn).click();
        await page.locator(xpath.MenuPost).click();
        await page.locator(xpath.PostTags).click();
    });

    test('Click button "Add New Tag"', async ({page}) => {
        await test.step('Clisk button Add Tag', async () => {
            // click button add tag
            await page.locator(xpath.BtnAddTag).click();
            // hiển thị lỗi
            await expect(page.locator(xpath.MsgRequired)).toBeVisible();
            });

        await test.step('Điền thông tin tag', async () => {
            // điền invalid tag
            await page.locator(xpath.TagName).fill(invalidTagName);
            await page.locator(xpath.BtnAddTag).click();
            // hiển thị lỗi
            await expect(page.locator(xpath.MsgNameExist)).toBeVisible();
            });   
    });
});

test.describe('@POST_TAG_002 - Add tag success', async () => {

    test.beforeEach(async ({page}) => {
        await test.step('Go to menu tags', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
            await page.locator(xpath.userName).fill(valid.username);
            await page.locator(xpath.password).fill(valid.password);
            await page.locator(xpath.BtnLogIn).click();
            await page.locator(xpath.MenuPost).click();
            await page.locator(xpath.PostTags).click();
        })

        page.on('dialog', async dialog => {
            await dialog.accept();
        })
    });

    
    test('Điền tag name và click button', async ({page}) => {

        const name = `tag ${validTagName}`;
        const slug = "";
        const name1 = `tag ${validTagName} 02`;
        const slug1 = `tag-${validTagName}-02`;


        await test.step('Điền valid name', async () => {
            // điền valid tag
            await page.locator(xpath.TagName).fill(name);
            await page.locator(xpath.BtnAddTag).click();
            // Check tag mới được tạo
            await expect(page.locator(xpath.MsgTagAdded)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name))).toBeVisible();
        });

        await test.step('Điền valid name và slug', async () => {
            // điền valid tag + slug
            await page.locator(xpath.TagName).fill(name1);
            await page.locator(xpath.TagSlug).fill(slug1);
            await page.locator(xpath.BtnAddTag).click();
            // Check tag mới được tạo
            await expect(page.locator(xpath.MsgTagAdded)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name1))).toBeVisible();    
        });

        await test.step('Xóa các dữ liệu đã thêm vào', async () => {
            // hover name, slug và click delete
            await page.locator(getXpathTagNameInTable(name)).hover();
            await page.locator(getXpathBtnDelete(name)).click();
            // check hiển thị dữ liệu đã xóa name
            await expect(page.locator(getXpathTagNameInTable(name))).not.toBeVisible();
            await expect(page.locator(getXpathSlugNameInTable(slug))).not.toBeVisible();
            //hover name1 và click delete
            await page.locator(getXpathTagNameInTable(name1)).hover();
            await page.locator(getXpathBtnDelete(name1)).click();;
            // check hiển thị dữ liệu đã xóa name1 và slug1
            await expect(page.locator(getXpathTagNameInTable(name1))).not.toBeVisible();
            await expect(page.locator(getXpathSlugNameInTable(slug1))).not.toBeVisible();
        });
    });
});

test.describe('@POST_TAG_003 - Tag - slug auto remove special character', async () => {

    test.beforeEach(async ({page}) => {
        await test.step('Go to menu tags', async () => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
            await page.locator(xpath.userName).fill(valid.username);
            await page.locator(xpath.password).fill(valid.password);
            await page.locator(xpath.BtnLogIn).click();
            await page.locator(xpath.MenuPost).click();
            await page.locator(xpath.PostTags).click();
        });

        page.on('dialog', async dialog => {
            await dialog.accept();
        })

    });

    test('Điền tag name và click button', async ({page}) => {

        const name2 = `tag ${validTagName} 03`;
        const slug2 = "Đây là tag đặc biệt @100 $200"

        await test.step("điền name2 và slug 2", async () => {
            // điền valid tag + slug
            await page.locator(xpath.TagName).fill(name2);
            await page.locator(xpath.TagSlug).fill(slug2);
            await page.locator(xpath.BtnAddTag).click();
            // Check tag mới được tạo
            await expect(page.locator(xpath.MsgTagAdded)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name2))).toBeVisible();
        });

        await test.step('Xóa các dữ liệu đã thêm vào', async () => {
            //hover name2, slug2 và click delete
            await page.locator(getXpathTagNameInTable(name2)).hover();
            await page.locator(getXpathBtnDelete(name2)).click();;
            // check hiển thị dữ liệu đã xóa name12 và slug2
            await expect(page.locator(getXpathTagNameInTable(name2))).not.toBeVisible();
            await expect(page.locator(getXpathSlugNameInTable(slug2))).not.toBeVisible();
        });
    });
});

test.describe('POST_CATEGORY_001 - Creat category success', async () => {

    test.beforeEach(async ({page}) => {
        await test.step('go to menu category', async() => {
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
            await page.locator(xpath.userName).fill(valid.username);
            await page.locator(xpath.password).fill(valid.password);
            await page.locator(xpath.BtnLogIn).click();
            await page.locator(xpath.MenuPost).click();
            await page.locator(xpath.PostCategories).click(); 
        });
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
    });

    test('Diền thông tin category', async ({page}) => {
        
        const name3 = `category ${validTagName} 04`;
        const slug3 = `category-${validTagName}-04`;
        const parentCategory = "k11 class";

        await test.step('Điền thông tin category', async () => {
            // Điền thông tin
            await page.locator(xpath.TagName).fill(name3);
            await page.locator(xpath.TagSlug).fill(slug3);
            await page.locator(xpath.ParentCategory).selectOption(parentCategory);
            await page.locator(xpath.BtnAddCategory).click();
            // Check hiển thị
            await expect(page.locator(xpath.MsgCategoryAdded)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name3))).toBeVisible();
        });

        await test.step('Xóa các dữ liệu đã thêm vào', async () => {
            //hover name3 và click delete
            await page.locator(getXpathTagNameInTable(name3)).hover();
            await page.locator(getXpathBtnDelete(name3)).click();;
            // check hiển thị dữ liệu đã xóa name2 và slug2
            await expect(page.locator(getXpathTagNameInTable(name3))).not.toBeVisible();
            await expect(page.locator(getXpathSlugNameInTable(slug3))).not.toBeVisible();
        });
    });
});