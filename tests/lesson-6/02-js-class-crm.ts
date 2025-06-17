class Customer {
    id;
    name;
    email;
    phone

    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log(`Customer ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }
}

const customer = new Customer (1, "Michou", "mimi123@.pw", "0123456789")
customer.displayInfo();
customer.updateEmail('new123@.mimi');
customer.displayInfo();

