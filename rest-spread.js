// Rest             Spread
// ...       =        ...

// function getCart(name, age, status, orders, price) {
  
//    console.log(getCart.length);
//   console.log(arguments.length);
// // }
//  getCart('Mike', 'Sveta', 'Nick');

// function getParams(name, age, ...rest) {
// console.log(name);
// console.log(age);
// console.log(rest);
// console.log(Array.isArray(rest));
// console.log(typeof rest);

// }


// // getParams('Vova', 20);
// getParams('Vova', 20, 'status');
// // getParams('Vova', 20, 'orders', 451);

// ЗАДАЧА
// Написати функцію, яка додає елементи в кінець масиву
const janres = ['rap', 'rock', 'pop'];


function customPush(array, ...style) { //rest
const newArr = [...array, ...style];   //spread
return newArr;
console.log(newArr);
}

console.log(customPush(janres,'jazz','punk'));