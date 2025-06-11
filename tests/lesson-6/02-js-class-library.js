class Library {
    constructor(name, location, books) {
        this.name = name;
        this.location = location;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(title) {
        return this.books.filter(book => book.name === title);
    }
}

const book1 = { name: 'Nhà Giả Kim'};
const book2 = { name: 'Harry Potter'};
const book3 = { name: 'Nhà Giả Kim'};
const book4 = { name: '1984'};

const library = new Library ('Thư viện sách', 'Hà Nội');
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log(`Lirary: ${library.name}, Location: ${library.location}`);
console.log(`All Books:`, library.books);
console.log(`Found Books:`, library.findBook('Nhà Giả Kim'));
