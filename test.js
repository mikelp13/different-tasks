// ================ custom forEach method =========================================

const arr = [10, 11, 12, 13, 14];

Array.prototype.forEach2 = function (callback) {
  const arr = this;

  if (this == null) {
    throw new Error(`Can't iterate over undefined or null`);
  }
  for (let i = 0; i < arr.length; i += 1) {
    callback(arr[i], i, arr);
  }
};

arr.forEach2((item, idx, array) => {
  console.log('item :>> ', item);
});

// ================ custom filter method =========================================

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

// ================ custom map method ============================================

// ================ custom reduce method =========================================
