// Task 8.
// -=Получить средний возраст=-
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 29 ];
// let arr = [ vasya, petya, masha ];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//

const users = [
  ['Вася', 25],
  ['Петя', 38],
  ['Маша', 29],
];

const age = [];
let sum = 0;
let result = 0;

const getAverageAge = function (users) {
  for (const user of users) {
    age.push(user[1]);
  }

  for (const item of age) {
    sum += item;
  }
  result = Math.round(sum / age.length);
  return result;
};

console.log(getAverageAge(users));
