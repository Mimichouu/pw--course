import { test, expect } from "@playwright/test";
import { ProductPage } from "../../page/product-page";

test('Exercise 2: Product Page', async ({page}) => {
    let productPage = new ProductPage(page)

    const arrayProduct = [ 
        {
            name: 'Product 1',
            price: 10,
            quantity: 2
        },
        {
            name: 'Product 2',
            price: 20,
            quantity: 3
        },
        {
            name: 'Product 3',
            price: 30,
            quantity: 1
        }
    ];

    await test.step('Truy cập vào Product page', async () => {
        await productPage.gotoProductPage();
    })

    await test.step('Thêm sp vào giỏ hàng', async () => {
        for (let i = 0; i < arrayProduct.length; i++) {
            await productPage.addProductToCart(arrayProduct[i].name, arrayProduct[i].quantity)
        }
    })

    await test.step('Kiểm tra số lượng sp trong giỏ hàng', async () => {
        for (let i = 0; i < arrayProduct.length; i++) {
            const actualQuantityProduct = (await productPage.getInfoProductInCart(arrayProduct[i].name)).quantity;
            const expectQuantityProduct = arrayProduct[i].quantity;
            expect(actualQuantityProduct).toEqual(expectQuantityProduct.toString());
        }
    })

    await test.step('Kiểm tra tổng tiền của giỏ hàng', async () => {
        for (let i = 0; i < arrayProduct.length; i++) {
            const actualTotalProduct = (await productPage.getInfoProductInCart(arrayProduct[i].name)).total;
            const total = arrayProduct[i].quantity * arrayProduct[i].price;
            const expectTotalProduct = '$' + total.toFixed(2);
            expect(actualTotalProduct).toEqual(expectTotalProduct);
        }
    })
})