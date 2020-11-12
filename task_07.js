// Task 7.
// -=Отсортировать пользователей по возрасту=-
// Напишите функцию sortByAge(users), которая принимает массив массивов и сортирует их по возрасту.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);
//
const vasya = ['Вася', 25];
const petya = ['Петя', 30];
const masha = ['Маша', 28];

const arrOfNames = [vasya, petya, masha];

   const newArray = [...arrOfNames];

   newArray.sort(function sortByAge(a, b) {
    return a[1] - b[1];
  })

 console.log(arrOfNames);
 console.log(newArray);
