// =================== рекурсія(функція викликається сама в собі) ===========================================

// const arr = [1, 2, [3, 4, [5]], 6, 7, [[8]]];

// function flattenDeep(arr) {
//   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }

// console.log(flattenDeep(arr));// [1, 2, 3, 4, 5, 6, 7, 8]
