/*This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following 
methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!*/
const numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function(numbers){
  return this.map(num => Math.pow(num, 2));
};

Array.prototype.cube = function(numbers) {
  return this.map(num => Math.pow(num, 3));
};

Array.prototype.average = function(numbers) {
  let sum = this.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);

  return sum / this.length;
};

Array.prototype.sum = function(numbers){
  return this.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);
};

Array.prototype.even = function(numbers)  {
  return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function(numbers) {
  return this.filter(num => num % 2);
};
 // ========================================================================================
