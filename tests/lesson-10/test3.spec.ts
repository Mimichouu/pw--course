import { test, expect } from "@playwright/test";
import { TodoPage } from "../../page/todo-page";

test('Exercise 3: Todo Page', async ({page}) => {
    let todoPage = new TodoPage(page);

    await test.step('Truy cập vào TodoPage', async () => {
        await todoPage.gotoTodoPage();
    })

    await test.step('Thêm 100 items', async () => {
        for (let i = 1; i <= 10; i++ ) {
            await todoPage.addNewTask(`Todo ${i}`);
        }
    })

    await test.step('Xóa các item số lẻ', async () => {
        todoPage.page.on('dialog', async dialog => {
            await dialog.accept();
        })

        for(let i = 1; i <= 10; i += 2) {
            const content = `Todo ${i}`;
                await todoPage.deleteTask(content);
        }
    })

    await test.step('Kiểm tra todo có thứ tự 90 nằm trong viewport', async () => {
        const xpathTodo90 = todoPage.getLocatorTask('Todo 6');
        await expect(xpathTodo90).toBeInViewport({timeout: 5000});
    })

    await test.step('Kiểm tra todo có thứ tự 21 bị ẩn - không nằm trong DOM', async () => {
        const xpathTodo21 = todoPage.getLocatorTask('Todo 5');
        await expect(xpathTodo21).not.toBeAttached();
    })        
})