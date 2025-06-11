class Order {
    constructor (orderId, customerName, items, totalAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    

    addItem(product) {
        this.items.push(product);
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((sum, item) => {
            const discountedPrice = item.price * (1 - item.discount / 100);
            return sum + discountedPrice * item.amount;
        }, 0);
        return this.totalAmount;
    }
}

const product1 = { name: 'Smartphone', price: 800, amount: 3, discount: 15};
const product2 = { name: 'Headphone', price: 200, amount: 2, discount: 5};

const order = new Order ('0123456789', 'Mimi');
order.addItem(product1);
order.addItem(product2);

console.log(`Order Id: ${order.orderId}`);
console.log(`Customer: ${order.customerName}`);
console.log(`Items:`, order.items);
console.log(`Total Amount: ${order.calculateTotal()}`);



