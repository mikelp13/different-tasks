const objB = {
  z: 10,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log('objA', objA)
console.log(objA.z)