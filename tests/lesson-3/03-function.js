function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 10));
console.log(multiply(5, 20));


function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(100, 1.5, 6));
console.log(findMin(0.2, 2000, -3.5));


let studentsList= [
    {name: 'Cam', score: 9},
    {name: 'Quýt', score: 10},
    {name: 'Dừa', score: 8.9}    
];


function getTopStudents(students, threshol) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        topStudents.push(students[i].name)
    }
    return topStudents;
}
let result = getTopStudents(studentsList, 10);
console.log(result);

function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years / 100);
    return total;
}

console.log(calculateInterest(1000000, 5, 1));