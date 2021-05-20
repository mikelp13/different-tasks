// Дан массив с числами. Используя метод map извлеките
// из каждого элемента массива квадратный корень и запишите результат в новый массив.

// const array = [
//   {
//     name: 'number 1',
//     value: 9,
//   },
//   {
//     name: 'number 2',
//     value: 16,
//   },
//   {
//     name: 'number 3',
//     value: 4,
//   },
//   {
//     name: 'number 4',
//     value: 25,
//   },
// ];

// const result = array.map(({ value }) => Math.sqrt(value));
// console.log(result);
// =======================================
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// const string = array.map(arr => {
//   return { ...arr, name: arr.name + '!' }
// })
// console.log(string);

// =======================================
// Дан массив со строками. Используя метод map переверните символы каждой строки
// в обратном порядке.

// const reverseString = array.map(({name}) => name.split('').reverse().join(''))
//  console.log(reverseString);
// =======================================
// Дан следующий массив:
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];

// const result = arr.map(str => [...str].map(Number))
// console.log(result);
// =======================================
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
// const numberArray = ['123', '456', '789', '13', '45'];

// const result = numberArray.map((item, index) => Number(item) * (index + 1));
// console.log(result);
// =======================================
// Дан массив с числами. Оставьте в нем только положительные числа.
// const numberArray = [-12, 45, -7, 13, -45];
// const result = numberArray.filter(num => num >= 0);
// console.log(result);
// =======================================
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// const numberArray = [1, 9, -7, 13, -45];
// const result = numberArray.filter(num => num > 0 && num < 10 );
// console.log(result);
// =======================================
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const stringArr = ['html', 'css', 'javascript', 'react', 'nodejs'];
// const result = stringArr.filter(str => str.length > 5);
// console.log(result);
// ==========================================
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// const numberArray = [1, 9, 5, 10, 8];
// const result = numberArray.filter((num, index) => num * (index + 1) < 30);
// console.log(result);
// ==========================================
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
// const array = [1, 2, [3, 4], 5, [6, 7]]
// const result = array.filter(elem => item.constructor.name !== 'Array')
//  console.log(result);
// ==========================================
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// const numberArray = [1, -9, 5, -10, 8, -2];
// const result = numberArray.reduce((acc, num) => {
//   if (num < 0) {
//     acc +=1;
//   }
//   return acc;
// }, 0);

// console.log(result);

// =========================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// const numberArray = [1, 9, 5, 10, 8, 2];
// const result =  numberArray.every(num => num > 0)
// console.log(result);
// =========================================
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// const numberArray = [1, 2, 3, 10, 8, 2];
// const result =  numberArray.every((num, index) => (num * index + 1) < 30)
// console.log(result);
// =========================================
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// const numberArray = [1, -2, 3, -10, 0, 8];
// const result =  numberArray.some((num) => num > 0)
// console.log(result);
// =========================================
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// =========================================
// const headerNavigation = [
//   {
//     name: 'Home',
//     path: '/home',
//   },
//   {
//     name: 'About',
//     path: '/about',
//   },
//   {
//     name: 'Contacts',
//     path: '/contacts',
//   },
//   {
//     name: 'Sign In',
//     path: '/signin',
//   },
//   {
//     name: 'Sign Up',
//     path: '/signup',
//   },
//   {
//     name: 'Logout',
//     path: '/logout',
//   },
// ];
// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// const markup = (array) => {
//   return  array.reduce((acc, {name, path})=>{
//     acc += ( `<li><a href="${path}">${name}</a></li>`) 
//     return acc;
//   },'')
// };

// const headerNavRef = document.querySelector('.header-navigation');
// headerNavRef.insertAdjacentHTML('afterbegin', markup(headerNavigation));
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">
//     </a>
// </li>' для каждого из элементов массива
// =========================================
// const products = [
//   {
//     id: '1',
//     name: 'Kiwi',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?',
//   },
//   {
//     id: '2',
//     name: 'Mango',
//     description: 'Lorem, ipsum dolor sit amet',
//   },
//   {
//     id: '3',
//     name: 'Bread',
//     description: 'Lorem, ipsum dolor sit amet consectetur Temporibus, at?',
//   },
// ];
// const cart = [];
// Напишите функцию, которая будет добавлять элемент в массив cart и создавать ему дополнительное свойство quantity равное нулю
// const addToCart = (arr, id) => {
//   const newElem = arr.find(item => item.id === id);
//   newElem.quantity = 1;
//   cart.push(newElem);
// };

// addToCart(products, '3');
// addToCart(products, '2');
// console.log(cart);
// Напишите функцию, которая будет удалять элемент из массива cart по id
// const removeFromCart = id => {
//   return cart.filter(item => item.id !== id);
// };
// console.log(removeFromCart('3'));
// Напишите функцию, которая будет добавлять количество товаров (свойство quantity) на единицу
// const addQuantity = (id) => {
//   const product = cart.find(item => item.id === id)
//     product.quantity += 1;
//     console.log(product);
// }
// addQuantity('3')

// const decrQuantity = (id) => {
//   const product = cart.find(item => item.id === id)
//   if (product.quantity < 1) {
//     return;
//   } else{
//     product.quantity -= 1;
//   }

// }
// console.log(cart);
// decrQuantity('3')
// decrQuantity('3')

// Напишите функцию, которая будет фильтровать массив products по названию товара
// const filterByName = (arr, name) => {
//   return arr.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) )
//   };
//   console.log(filterByName(products, 'mango'));

// Напишите функцию, которая будет возвращать разметку формата, пригодного для отображения
// информации о товаре в модальном окне.
// Обязательно добавить кнопки добавления товара и записать в них id товара

// const markup = cart => {
//   return cart.reduce((acc, { id, name, description }) => {
//     acc += `<li>
//   <h2>${name}</h2>
//   <p>${description}</p>
//   <button type="button" id="${id}">add</button>
//   <button type="button" id="${id}">remove</button>
//   </li>`;
//     return acc;
//   }, '');
// };

// const productsListRef = document.querySelector('.products')
// productsListRef.insertAdjacentHTML('afterbegin', markup(cart));
// =======================================


//******************  Delete dublicates ****************** 

// const colors = ['blue','green','green','black','orange','blue','green','red'];

// // ======================= method 1 ============
// // const uniqueColors = colors.reduce((acc, color) => {
// //  if (acc.indexOf (color) === -1) {
// //         acc.push(color);
// //       }
// //       return acc
// // },[] )

// // ======================= method 2 ============

// // const uniqueColors = colors.reduce((acc, color) => {
// //   if (!acc.includes(color)) {
// //          acc.push(color);
// //        }
// //        return acc
// //  },[] )
 
// //========================== method 3 ==============
// const uniqueColors = Array.from(new Set(colors));

//  console.log(uniqueColors);

//=======================================================
// const arr = [1, 8, 1, 5, 9, 5, 8];
//1st method
// function unique(arr) {
//   const uniqueArr = [];
//   for (const item of arr) {
//     if (uniqueArr.indexOf(item) === -1) {
//       uniqueArr.push(item);
//     }
//   }
//   return uniqueArr;
// }
// console.log(unique(arr));

//2st method
// function unique(arr) {
//   const uniqueArr = [];
//   for (const item of arr) {
//     if (!uniqueArr.includes(item)) {
//       uniqueArr.push(item);
//     }
//   }
//   return uniqueArr;
// }
// console.log(unique(arr));

//3st method
// function unique(arr) {
// const uniqueArr = [...new Set(arr)]
//   return uniqueArr;
// }
// console.log(unique(arr));

//4st method
// function unique(arr) {
//  return arr.filter((item, index)=> arr.indexOf(item) === index)
//   }

//   console.log(unique(arr));

// ************************** replace item in Array **********************
// function replaceItems(arr, item, replaceItem) {
//   return arr.map(num => (num === item ? replaceItem : num));
// }
// console.log(replaceItems([1, 2, 3, 4, 2], 2, 'a'));