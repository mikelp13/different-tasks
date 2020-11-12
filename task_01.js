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


const sumInput = function(){

  const inputArr = [];
  let input = '';
  let sum = 0;

  do {
    input = prompt('Введіть значення');
    
    if (Number.isNaN(Number(input))|| !input){
      break;
    }
    inputArr.push(input);
  } while(input !== null);


  for(let i = 0; i < inputArr.length; i+=1 ){
    sum += Number(inputArr[i]);
  }
}

sumInput();