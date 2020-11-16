// Объекты
// ==============================================================================
// const products = [
//   {
//     id: '1',
//     name: 'milk',
//     value: 'Молоко',
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: '2',
//     name: 'water',
//     value: 'Вода',
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: '3',
//     name: 'juice',
//     value: 'Сок',
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: '4',
//     name: 'fruitDrink',
//     value: 'Морс',
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: '5',
//     name: 'milkShake',
//     value: 'Молочный коктейль',
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];

//================================ Задача 1 ===============================================
// 1. Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.

// const getSaleProducts = function (array, prop) {
//   const arr = [];

//   for (const item of array) {

//     if (item[prop]) {

//       arr.push(item)
//     }
//   }
//   return arr;
// };

// console.log(getSaleProducts(products,'sale'));

// ========================================================================================

//================================ Задача 2 ===============================================
// 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.
// const getProductsName = function (array) {
//   const arr = [];

//   for (const item of array) {
//     arr.push(item.value);
//   }
//   return arr;
// };

// console.log(getProductsName(products));
// ========================================================================================

//================================ Задача 3 ===============================================
// 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму
// всех товаров на складе (свойство quantity).

// const getTotalQuantity = function (array) {

// let total = 0;

//   for (const item of array) {
//     total+= item.quantity;
//   }
//   return total;
// };

// console.log(getTotalQuantity(products));

// ========================================================================================
//================================ Задача 4 ===============================================
// 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.

// const getProductById = function (array, id) {
//   for (const item of array) {
//     if (item.id === id) {
//       return item;
//     }
//   }
// };

// console.log(getProductById(products, '5'));
// // ========================================================================================

//================================ Задача 5 ===============================================
// 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.

// const deleteProductById = function (array, id) {
//   for (const item of array) {
//     if (item.id === id) {
//       let index = array.indexOf(item);

//       array.splice(index, 1);
//     }
//   }

//   return array;
// };

// console.log(deleteProductById(products, '4'));
// ========================================================================================

//================================ Задача 6 ===============================================
// 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products.
//  Товар передается в функцию в виде объекта

// const createProduct = function (array, object) {

//   array.push(object);

//   return array;
// };

// console.log(createProduct(products, {
//   id: '6',
//   name: 'coffee',
//   value: 'кофе',
//   price: 40,
//   sale: true,
//   quantity: 45,
// }));

// ========================================================================================

//================================ Задача 7 ===============================================
// 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products
// в зависимости от передаваемого значения name или value.

// const{id, name, value, price, sale, quantity} = products

// const findProductByName = (array, option) => {
//   for (const item of array) {
//     if (item.name === option || item.value === option) {
//       return item;
    
//     }
//   }
// };

// console.log(findProductByName(products,'Сок'));
// ========================================================================================

//================================ Задача 8 ===============================================
// 8. Создайте функцию editProduct(), которая будет изменять объект products. 
// В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.

// const editProduct = (array, id, key, value) => {

// for (const item of array) {

// const {name} = products;

//   if (item.id === id) {

//     item[key] = value;

//   }
// }
// return products;
// }

// console.log(editProduct(products, '5', 'name', 'milkPleasure'));

// // ========================================================================================

//================================ Задача 9 ===============================================
// 9. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами
//  у которых будут только свойства id, name, value и price

// const modifyProductList = (arr) =>{
//   const newArr = [];
//   for (const item of arr) {
//     const {id, name, value, price} = item;
//     newArr.push({id, name, value, price});
//   }
//   return newArr;
// };
// console.log(modifyProductList(products));
// ========================================================================================

//================================ Задача 10 ===============================================
// 10. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.

// const addToCart =  function (array, id) {
// const cart =[];
// for (const item of array) {
//   if(item.id === id) {
//     cart.push(item);
//   }
// }
// return cart;
// }

// console.log(addToCart(products, '5'));

// ========================================================================================
