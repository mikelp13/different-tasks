/*1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
  2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
  3. Реализуйте счетчик вызова функции, работающий на замыканиях. 
  4. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
  5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
  6. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
 */

//================================ Задача 1 ===============================================
//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(func(2)(3)(4));

// ========================================================================================

//================================ Задача 2 ===============================================
//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
// function func(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function () {
//           return [a, b, c, d];
//         };
//       };
//     };
//   };
// }
// console.log(func(2)(3)(4)(5)());

// ========================================================================================
// function pusher(...par) {
//   return par;
// }

// function func(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function () {
//           return pusher(a, b, c, d);
//         };
//       };
//     };
//   };
// }

// const result = func(2)(3)(4)(5)();
// console.log(result);

// ========================================================================================

//================================ Задача 3 ===============================================
//Реализуйте счетчик вызова функции, работающий на замыканиях.
// const addOne = function (num = 0) {

//   return function (step = 1) {
//     return (num += step);
//   };
// };
// const counter = addOne();
// console.log(counter(1));
// console.log(counter(1));
// console.log(counter(1));
// console.log(counter(1));

// // ========================================================================================

//================================ Задача 4 ===============================================
//4. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
// const incrementOne = function (num = 10) {

//   return function (step = 1) {
//     return (num -= step);
//   };
// };
// const reverseCounter = incrementOne();
// console.log(reverseCounter(1));
// console.log(reverseCounter(1));
// console.log(reverseCounter(1));
// console.log(reverseCounter(1));

// ========================================================================================

//================================ Задача 5 ===============================================
//5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function createCounter(num = 10) {
//   return function (step = -1) {
//     return num ? num += step : 'Отсчет окончен';
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ========================================================================================

//================================ Задача 6 ===============================================
//6. Сделайте объект с тремя функциями, каждая из которых будет принимать
//  параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива,
//  вторая функция - сумму квадратов, а третья - сумму кубов.

// const object = {
//   pow(array, exp) {
//     let sum = 0;
//     for (const element of array) {
//       sum += Math.pow(element, exp);
//     }
//     return console.log(sum);
//   },
//   sum(array) {
//     this.pow(array, 1);
//   },
//   square(array) {
//     this.pow(array, 2);
//   },
//   cube(array) {
//     this.pow(array, 3);
//   },
// };

// object.sum([1, 2, 3, 4, 10]);
// object.square([1, 2, 3]);
// object.cube([1, 2, 1]);
// ========================================================================================

//================================ Задача 7 ===============================================
/*7. Создайте функцию высшего порядка cartCounter(), в которой будет реализован функционал
 увеличения или уменьшения количества выбраного товара в корзине в зависимости от передаваемого id товара.
 Используйте механизм замыкания для решения задачи.
*/

// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 3,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]
// }

// function cartCounter(quantity) {
//   return function (step = 1) {
//     return (quantity += step);
//   };
// }

// function findProductById(array, id) {
//   for (const product of array) {
//     if (product.id === id) return product;
//   }
// }

// function getValue(array, id) {
//   const product = findProductById(array, id);
//   const counter1 = cartCounter(product.quantity);
//   console.log(counter1(-1));
//   console.log(counter1(1));
//   console.log(counter1(1));
// }
// getValue(cart.products, 2);

// ========================================================================================

