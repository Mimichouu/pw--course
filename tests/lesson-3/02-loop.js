let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


for (let i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log('');
}


let arr = [];
for (let i = 1; i <= 99; i += 2) {
    arr.push(i);
}
console.log(arr);


for(let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}


let doanhThu = [
    {month: 1, total: 100},
    {month: 2, total: 100},
    {month: 3, total: 100},
    {month: 4, total: 100},
    {month: 5, total: 100},
    {month: 6, total: 100},
    {month: 7, total: 100},
    {month: 8, total: 100},
    {month: 9, total: 100},
    {month: 10, total: 100},
    {month: 11, total: 100},
    {month: 12, total: 100}
];

let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}
 
console.log(tongDoanhThu);