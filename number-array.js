/* Дан массив числами, например:
  [10, 20, 30, 50, 235, 3000]. 
  Выведите на экран только те числа из массива, 
  которые начинаются на цифру 1, 2 или 5.*/

const numbers = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < numbers.length; i += 1) {
 
  let str = String(numbers[i]);

  if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
    console.log(numbers[i]);
  } 

}