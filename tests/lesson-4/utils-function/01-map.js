// 4.1 Tuef scores tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu >=90

const scores = [85, 90, 78];
let newArr = scores.map(score => {
    if (score < 90) {
        return score * 1.1;
    }else {(score >= 90)
        return score * 0.95
    }
});
console.log(newArr);


const numbers = [1, 2, 3, 4];
// Từ numbers chuyển thành chuỗi mới

let newStr = numbers.map(num => String(num));
console.log(newStr);


// Nhân đôi mỗi giá trị

let doubleNums = numbers.map(num => num * 2);
console.log(doubleNums);

 