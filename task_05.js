// Task 5.
// -=Фильтрация по диапазону=-
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

const arr = [5, 3, 8, 1];

const filterRange = (arr, a, b ) => {
const newArr = [];

  for (const num of arr) {
    if(num >= a && num <= b){
        newArr.push(num);
    }
  }
    return newArr;
}

const result = filterRange(arr, 2, 4);
console.log(result);