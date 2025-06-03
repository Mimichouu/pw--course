const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chai name thành mảng các từ (dùng khoảng trắng)

console.log(name.split( " " ));

// 2. Chia email thành mảng các email ( dùng dấu phẩy)

console.log(emails.split( "," ));

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang)

console.log(date.split( "-" ));
