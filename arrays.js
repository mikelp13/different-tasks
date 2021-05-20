//TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

// const str = 'ваCя';

// const ucFirst = function(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// };

// ucFirst(str);

//  TASK 2.
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];

//   styles.push('Рок-н-ролл');

//   let index = Math.floor(styles.length / 2);

//   console.log(styles);

//   styles.splice(index, 1, 'Классика');
//   console.log(styles);

//   const deleted = styles.splice(0, 1);
//   console.log(deleted);

//   styles.splice(0, 0,'Рэп','Регги');
//   console.log('styles :>> ', styles);

// Task 3.
// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// const sumInput = function(){

//   const inputArr = [];
//   let input = '';
//   let sum = 0;

//   do {
//     input = prompt('Введіть значення');

//     if (Number.isNaN(Number(input))|| !input){
//       break;
//     }
//     inputArr.push(input);
//   } while(input !== null);

//   for(let i = 0; i < inputArr.length; i+=1 ){
//     sum += Number(inputArr[i]);
//   }
// }

// sumInput();

//================================== Task 4 ====================================================
// -=Переведите текст вида border-left-width в borderLeftWidth=-
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
//
// function camelize(str) {

//   const arr = str.split('-');
//   //console.log(arr);
//   for (const item of arr) {
//       if (arr.indexOf(item) === 0) {
//           continue
//       }
//       const index = arr.indexOf(item);
//       const capitalize = item[0].toUpperCase() + item.slice(1, item.length);
//       arr.splice(index, 1, capitalize);
//       //item = item[0].toUpperCase() + item.slice(1, item.length);

//       //console.log(item[0].toUpperCase() + item.slice(1, item.length));

//   }
//   return arr.join('')
// }
// const result = camelize('border-left-width');
// console.log(result);
// ==============================================================================================
// ========================================== Task 5 ============================================
// -=Фильтрация по диапазону=-
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

// const arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b ) => {
// const newArr = [];

//   for (const num of arr) {
//     if(num >= a && num <= b){
//         newArr.push(num);
//     }
//   }
//     return newArr;
// }

// const result = filterRange(arr, 2, 4);
// console.log(result);
// ==============================================================================================
// ========================================== Task 6 ============================================
// -=Фильтрация по диапазону "на месте"=-
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]
//

// const arr = [5, 3, 8, 1];

// const filterRangeInPlace = function (arr, a, b) {

//   for (const num of arr) {
//     if (num < a || num > b) {
//       let index = arr.indexOf(num);
//       arr.splice(index, 1);
//     }
//   }
//   console.log(arr);
// };

// filterRangeInPlace(arr, 1, 4);
// ==============================================================================================
// ========================================== Task 7 ============================================
// -=Отсортировать пользователей по возрасту=-
// Напишите функцию sortByAge(users), которая принимает массив массивов и сортирует их по возрасту.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);
//
// const vasya = ['Вася', 25];
// const petya = ['Петя', 30];
// const masha = ['Маша', 28];

// const arrOfNames = [vasya, petya, masha];

//    const newArray = [...arrOfNames];

//    newArray.sort(function sortByAge(a, b) {
//     return a[1] - b[1];
//   })

//  console.log(arrOfNames);
//  console.log(newArray);

// ==============================================================================================
// ========================================== Task 8 ============================================
// -=Получить средний возраст=-
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 29 ];
// let arr = [ vasya, petya, masha ];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// const users = [
//   ['Вася', 25],
//   ['Петя', 38],
//   ['Маша', 29],
// ];

// const age = [];
// let sum = 0;
// let result = 0;

// const getAverageAge = function (users) {
//   for (const user of users) {
//     age.push(user[1]);
//   }

//   for (const item of age) {
//     sum += item;
//   }
//   result = Math.round(sum / age.length);
//   return result;
// };

// console.log(getAverageAge(users));
// ==============================================================================================
// ========================================== Task 9 ============================================
// -=Трансформировать в массив имён=-
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let users = [ vasya, petya, masha ];
//

// const users = [
//   ['Вася', 25],
//   ['Петя', 38],
//   ['Маша', 29],
// ];

// const names = [];
// // let sum = 0;
// // let result = 0;

//   for (const user of users) {
//     names.push(user[0]);
//   }

//   console.log(names);
// ==============================================================================================
// ========================================== Task 10 ===========================================
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// const str = 'A room without books is like a body without a soul';

// const getVowelLetter = function (str) {

//   const letterArr = str.toLowerCase().split('');
//   const vowelArr = [];

//   for (const letter of letterArr) {

//     if (
//       letter === 'a' ||
//       letter === 'e' ||
//       letter === 'i' ||
//       letter === 'o' ||
//       letter === 'u'
//     ) {
//       vowelArr.push(letter);
//     }
//   }

//   let result = `Речення складається з ${vowelArr.length} голосних літер: ${vowelArr}`;
//   console.log(result);

//   return result;
// };

// getVowelLetter(str);
// ==============================================================================================
// ========================================== Task 11 ===========================================
// -=Анаграмма=-
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// anagram('finder', 'Friend');
//

// const anagram = function (firstWord, secondWord) {

//   const normalizedFirstWord = firstWord
//     .replace(/[\s.,%]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
//   const normalizedSecondWord = secondWord
//     .replace(/[\s.,%]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
//   normalizedFirstWord === normalizedSecondWord
//     ? console.log(`${firstWord} and ${secondWord} is an anagram!`)
//     : console.log(`${firstWord} and ${secondWord} is not an anagram!`);

// };

// anagram('finder', 'Friend');

// ==============================================================================================
// ========================================== Task 12 ============================================
// -=Палиндром=-
// Палиндром — слово, предложение или последовательность символов,
//  которая абсолютно одинаково читается как в привычном направлении,
//  так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Постановка
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
//  если строка является палиндромом, и false — если нет.
//  При этом нужно учитывать пробелы и знаки препинания.
// palindrome("racecar") === true
// palindrome("table") === false

// const palindrome = function (str) {
//   const normalizedStr = str.toLowerCase().replace(/\s/g, ''); // нормалізуємо рядок з урахуванням пробілів та приводимо до нижнього регістру

//   const reverseStr = normalizedStr.split('').reverse().join('');

//   if (normalizedStr === reverseStr) {
//     console.log(`String ${str} is a palindrome`);
//     return true;
//   } else {
//     console.log(`String ${str} is not a palindrome`);
//     return false;
//   }
// };

// palindrome('racecar');

// ==============================================================================================
// ========================================== Task 13 ============================================
// Shuffle array

// const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const shuffle = arr => {
//   for (let i = arr.length - 1; i > 0; i -= 1) {
//     let tmp = arr[i];
//     let rnd = Math.floor(Math.random() * (i + 1));

//     arr[i] = arr[rnd];
//     arr[rnd] = tmp;
//   }
//   return arr;
// };

//   console.log(shuffle(inputArr));
// ==============================================================================================
// ========================================== Task 14 ============================================
// Input array:["banana", "grapefruit", "banana", "grapefruit", "banana", "orange","banana"];
//  Expected sorted array: ["banana", "grapefruit", "orange"];

// const array = [
//   'banana',
//   'grapefruit',
//   'banana',
//   'grapefruit',
//   'banana',
//   'orange',
//   'banana',
// ];

// const sort = array => {
//   const obj = array.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});

//   const keys = Object.keys(obj)

//   return keys.sort((a, b) => obj[b] - obj[a])
// };

// console.log(sort(array));
// ==============================================================================================
// Array without repeat
const array = [1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9]; // expected [2, 5, 7, 9]

const withoutRepeat = array => {
  const uniqueValue = [];
  const obj = {};

  for (let i = 0; i < array.length; i += 1) {
    const currentEl = array[i];
    if (!(currentEl in obj)) {
      obj[currentEl] = 1;
    } else {
      obj[currentEl] += 1;
    }
  }

  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (obj[key] === 1) {
      uniqueValue.push(Number(key));
    }
  });
  return uniqueValue;
};

console.log(withoutRepeat(array)); // [2, 5, 7, 9]
// ==============================================================================================
