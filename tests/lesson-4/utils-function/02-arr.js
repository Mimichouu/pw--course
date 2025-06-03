// 1. Thêm 4 vào cuối numbres

const numbers = [1, 2, 3];
console.log(numbers.push(4));
console.log(numbers);

// 1. Thêm 'David' vài cuối names
const names = ['Alice', 'Bob', 'Charlie'];
console.log(names.push('David'));
console.log(names);


// 2. Loại bỏ phần tử cuối cùng của numbers

console.log(numbers.pop());
console.log(numbers);


// 3. Thêm 0 vào đầu numbers

console.log(numbers.unshift(0));
console.log(numbers);

// 3. Thêm 'David' vào đầu names

console.log(names.unshift('David'));
console.log(names);

// 4. Loại bỏ phần tử đầy của numbers

console.log(numbers.shift());
console.log(numbers);
