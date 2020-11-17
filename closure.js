/*ЗАМИКАННЯ це термін, який описує здатність функції запам'ятовувати лексичне оточення
 в якому вона була оголошена, і продовжувати отримувати доступ до змінних з цього лексичного оточення 
 незалежно від того де вона була викликана.*/

// const createCalcFunction = function(n)  {
//   return function () {
//     // функція оголошена в контексті createCalcFunction
//     console.log(1000 * n); // змінна n замкнулась
//   };
// };

// const calc = createCalcFunction(42);
// console.log(calc);
// calc();

//===========================================================================================================

// const createIncrementator = function(n) {
//   return function (num) {
//     return n + num;
//   };
// };


// const addOne = createIncrementator(1);
// console.log(addOne(10)); // num = 10, console result = 11


//===========================================================================================================


// const makeShef = function (name) {
//   console.log(name);

//   return function (dish) {
//     console.log(`${name} is cooking ${dish}`);
//   }
// }

// const mike = makeShef('Mike');
// const rob = makeShef('Rob');

// mike('meatballs');
// rob('soup');