let car = {
    make: 'Toyotal',
    model: 'Corolla',
    year: 2021
};
console.log(car.year);



let person = {
    name: 'Hang',
    address: {
        street: 'Khuong Dinh',
        city: 'Ha Noi',
        country: 'Viet Nam'
    },
};
console.log(person.address['street']);



let student = {
    name: 'Michou',
    grades: {
        math: 10,
        english: 10
    },
};
console.log(student.grades['math']);



let settings = {
    volume: 100,
    brightness: 50
};
settings.volume = 150;

console.log(settings);



let bike ={

};
bike.color = 'Red';

console.log(bike);


let employee = {
    name: 'Minghi',
    age: 6
};
delete employee.age;

console.log(employee);


let school = {
    classA: [
        'An',
        'Bình',
        'Châu'
    ],
    classB: [
        'Đào',
        'Hương',
        'Giang'
    ],
};
console.log(school);



