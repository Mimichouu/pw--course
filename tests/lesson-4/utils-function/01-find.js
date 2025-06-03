// 3.1 Tìm giá trị đầu tiên trong scores > 80

const scores = [85, 90, 78]; 
let firstScores = scores.find(score => score > 80);
console.log(firstScores);


// 3.2 Tìm giá trị đầu tiên trong ages > 20
const ages = [18, 21, 16, 25];
let firstAges = ages.find(age => age > 20);
console.log(firstAges);


// 3.3 Tìm từ đầu tiên trong words có độ dài  > 5
const words = ["apple", "banana", "cherry", "date"];
let fisrtWords = words.find(word => word.length > 5);
console.log(fisrtWords);