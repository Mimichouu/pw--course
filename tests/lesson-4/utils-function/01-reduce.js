// 6.1 Tính tổng các giá trị trong scores
const scores = [85, 90, 78];
let sum = scores.reduce((total, num) => total + num, 0);
console.log(sum);


// 6.2 Tính tích các giá trị trong numbres
const numbers = [1, 2, 3, 4];
let accumulation = numbers.reduce((total, num) => total * num);
console.log(accumulation);



// 6.3 tính tổng các giá trị trong expenses
const expenses = [50, 100, 150];
let checkSum = expenses.reduce((total, num) => total + num, 0);
console.log(checkSum);