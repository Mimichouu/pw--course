//2.1 Lọc các giá trị trong scores > 80

const scores = [85, 90, 78];

let newScores = scores.filter(score => score > 80);
console.log(newScores);


//2.2 Lọc các giá trị trong ages >= 18

const ages = [18, 21, 16, 25];

let newAges = ages.filter(age => age >= 18);
console.log(newAges);


//2.3 Lọc các từ trong words có độ dài > 5

const words = ["apple", "banana", "cherry", "date"];

let newLength = words.filter(word => word.length > 5);
console.log(newLength);
