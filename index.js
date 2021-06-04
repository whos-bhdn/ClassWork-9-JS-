// const number = 2;
// const number = new Number('2')
// const number = new Number('37')
// const number = 90000000;
// const number = 9e7; /9 * 10000000
// const number = 0.0004; = const number = 1e-4;
// const number = 1e-4;
// Якщо велике число краще писати скорочено

// console.log(number);


// const number = 22.5;
// console.log(Math.floor(number)) - округлення до нижчого
// console.log(Math.round(number)) - просте округлення 
// console.log(Math.ceil(number)) - округлення до найбільшого
// console.log(Math.trunc(number)) - забирає дроби(не працювував в IE)
// console.log(number)

// const number = 0.1;
// const number1 = 0.2;
// const number3 = 0.3;
// const sum = +(number + number1).toFixed(1); - округляє суму до нормального числа
// console.log(number3 === (number1+ number)) - false
// console.log(number + number1) - поганий приклад
// console.log(sum)
// comst sum = +(number * 10 + number1 * 10 ) / 10; - також округляє

// const number = 12.56356;
// const inf = Number.POSITIVE_INFINITY;
// const inf1 = Number.NEGATIVE_INFINITY;

// console.log(inf);
// console.log(inf1);
// console.log(inf === inf); ок
// console.log(inf1 === inf1); ок
// console.log((inf - inf) === 0); не працює

// const nan1 = NaN;
// console.log(nan1 === nan1); - дає false
// console.log(Object.is(nan1, NaN)); - так порівнявати те що не дорівнює одне одному в js


// const value = prompt('Enter value');

// // console.log(parseInt(value, 29)) - другий параметр буде міняти систему числення
// console.log(parseInt(value))
// console.log(parseFloat(value))

// console.log(isFinite(value)) - перевірка на число
// console.log(Math.random())

// const qwerty = (min, max) => {
//     // return Math.round(min + Math.random() * (max - min));
//     return Math.floor(min + Math.random() * (max + 1 - min))
// };
// console.log(qwerty(1, 3))
// let i = 0.2;
// while(i !== 10) {
//     i+=0.2
//     console.log('')
//     if(i > 9.8 && i < 10.2)
// }


function calculate(r) {
    return Math.PI * r ** 2; 
}
console.log(calculate(2))