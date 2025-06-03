//1.1 Kiểm tra tất cả giá trị trong scores c0s > 70 không

const scores = [85, 90, 78];

let checkScores = scores.every(score => score > 70);
console.log(checkScores);


//1.2 Kiểm tra tất cả giá trị trong ages có > 15 không

const ages = [18, 21, 16, 25];

let checkAges = ages.every(age => age > 15);
console.log(checkAges); 

//1.3 Kiểm tra tất cả từ trong word có độ dài > 3 không

const words = ["apple", "banana", "cherry", "date"];

let checkLength = words.every(word => word.length > 3);
console.log(checkLength); 