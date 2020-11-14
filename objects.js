// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// ================================ Приклад з вебінару =============================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Polly', online: true },
//   { name: 'Ajax', online: false },
// ];

// const findFriendByName = function(allFriends, name){

//   for (const friend of friends) {
//     console.log(friend.name);

//     if (friend.name === name){
//       return 'Знайшли друга !!!';
//     };
//   };

//   return 'Не знайшли :(';
// };

// const getAllNames = function(allFriends) {
//   const names = [];
//   for (const friend of friends){
//     names.push(friend.name);
//   };
//   return names;
// };

// // console.log(findFriendByName(friends, 'Polly'));

// console.log(getAllNames(friends));

// ===================================================================================

//================================ Задача 1 ==========================================
/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), 
которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0. */

// const salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// const sumSalaries = function(salaries){

//   const values = Object.values(salaries);

//   let sum = 0;

//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// };

// console.log(sumSalaries(salaries));
// ===================================================================================

//================================ Задача 2 ==========================================
/*
В базі даних користувачів стався збій. У деяких користувачів зникли значення з поля firstName, добре що у user вже є поле fullName, з якого ми можемо взяти потрібні дані. Давай повернено імена користувачам users у яких firstName рівне undefined за допомогою функції restoreNames. Повертати з функції нічого не потрібно.

Приклад:

const users = [
  ...,
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  ...,
];
restoreNames(users)
// users === [..., {firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy'}, ...]
 */

// const users = [

//   {
//     name: undefined,
//     lastName: 'Bennington',
//     fullName: 'Chester Bennington ',
//   },
//   {
//     name: undefined,
//     lastName: 'Shinoda',
//     fullName: 'Mike Shinoda',
//   }

// ]

// const restoreNames = function(users) {

//   for (const user of users) {
//     // console.log('user :>> ', user);
//     const fullNameArr = user.fullName.split(' ');
//     const firstName = fullNameArr[0];
//     user.name = firstName;
//   }
//   console.log('users :>> ', users);
// }

// restoreNames(users);
// ========================================================================================

//================================ Задача 3 ===============================================

/*Ці дівчата... Сьогодні отримали колективний лист від усіх користувачів жіночої статі.
Вони проти розголошення свого віку.
Доведеться видалити поле age з бази даних people в усіх person у яких поле gender рівне female.
Повертати з функції нічого не потрібно.*/
// const people = [
//   {
//     name: 'Anna',
//     age: 20,
//     gender: 'female',
//   },
//   {
//     name: 'Nick',
//     age: 30,
//     gender: 'male',
//   },
//   {
//     name: 'Tom',
//     age: 36,
//     gender: 'male',
//   },
//   {
//     name: 'Samanta',
//     age: 25,
//     gender: 'female',
//   },
// ];

// function removeFemaleAges(people) {
//   for (const person of people) {
//     console.log(person);

//     if (person.gender === 'female') {
//       delete person.gender;
//     }
//   }
//     return people;
// }

// console.log(removeFemaleAges(people));

//=================================Second Method======================================================

// function removeFemaleAges(people) {
//   // write code here

//   people.map(el => {
//     if (el.gender === 'female') {
//       delete el.age;
//     }
//   });
//   return people;
// }

// // console.log(people);
// removeFemaleAges(people);

// ========================================================================================

//================================ Задача 4 ===============================================

/* На складах, порядок. Роботи стоять без роботи.
  Проведемо інвентаризацію Потрібно навчити роботів розрізняти коробки і  порахувати 
  їх кількість. Коробки представлені у вигляді рядка aaabcda, де кожен символ, це коробка 
  відповідного типу. Створи функцію countBoxes, яка буде приймати рядок коробок boxes і повертати 
  об'єкт з кількістю відповідних коробок. */

// countBoxes('aabca') === {a 3, b 1, c 1}
// countBoxes('aaaaca31') === {a 5, c 1, 3 1, 1 1}
// countBoxes('') === {}
// /**
//  * @param {string} boxes
//  *
//  * @returns object
//  */

// function countBoxes(boxes) {

//   const numberOfBoxes = {};
//   const array = boxes.split("");
//   console.log(array);

//    for (let i = 0; i < array.length; i+=1) {

//     numberOfBoxes[array[i]] = 0;  // закидує в об'єкт ключі і присвоюєїм значення 0;
//   }

//   for (const key of array) {

//     if (numberOfBoxes.hasOwnProperty(key)) { // перевіряє чи об'єкт має такий ключ
//       numberOfBoxes[key] += 1;
//     }

//   } return numberOfBoxes;

//   }

//   countBoxes('aaaaca31');

// ========================================================================================

//================================ Задача 5 ===============================================
/* Вночі у головного інженера зі столу хтось потягнув схему, за якою ми виготовляли наших роботів.
  Тепер ми не знаємо, які дані потрібні для робота, щоб він працював коректно. 
  Пропоную зловити одного робота, що зараз прибирає у коридорі,
  підключитися до його терміналу і дізнатися, які поля нам потрібні для нових роботів. 
  Створи функцію getRobotSchema, яка приймає об'єкт robot і повертає набір ключів і типи значень,
  які в них мають зберігатися.
  Результат має виглядати ось так: [[key, type], [key, type]...] */

// Приклад:

//   const robot = {
//     version: 16,
//     name: 'Cleaner 3000',
//     coords: [345, 12],
//   };

//   getRobotSchema(robot) === [['version', 'number'], ['name', 'string'], ['coords', 'object']]

// /**
//  * @param {Object} robot
//  *
//  * @returns {string[][]}
//  */

      const robot = {
        version: 16,
        name: 'Cleaner 3000',
        coords: [345, 12],
      };

      function getRobotSchema(robot) {
        // write code here
        const entries = Object.entries(robot); //[['version', 16], ['name', 'Cleaner 3000'], ['coords', [345, 12]]]
         
        for (const item of entries) {

          item.splice(1, 1, (typeof item[1]));
          // [['version', 'number'], ['name', 'string'], ['coords', 'object']]
        }

        return entries; 
      }

      console.log(getRobotSchema(robot));

// ========================================================================================
