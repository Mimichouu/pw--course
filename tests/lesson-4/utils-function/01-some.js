// 5.1 Kiểm tra scores có giá trị nào > 80 không
const scores = [85, 90, 78];
let checkScores = scores.some(score => score > 80);
console.log(checkScores);

// 5.2 Kiểm tra ages có giá trị nào < 18 không
const ages = [18, 21, 16, 25];
let checkAges = ages.some(age => age < 18);
console.log(checkAges);


// 5.3 Kiểm tra words có từ nào dài hơn > 5 không
const words = ["apple", "banana", "cherry", "date"];
let checkLength = words.some(word => word.length > 5);
console.log(checkLength); 