// Task 9.
// -=Трансформировать в массив имён=-
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let users = [ vasya, petya, masha ];
// 

const users = [
  ['Вася', 25],
  ['Петя', 38],
  ['Маша', 29],
];

const names = [];
// let sum = 0;
// let result = 0;

  for (const user of users) {
    names.push(user[0]);
  }

  console.log(names);



