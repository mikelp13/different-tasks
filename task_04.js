// Task 4.
// -=Переведите текст вида border-left-width в borderLeftWidth=-
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
//
function camelize(str) {

  const arr = str.split('-');
  //console.log(arr);
  for (const item of arr) {
      if (arr.indexOf(item) === 0) {
          continue
      } 
      const index = arr.indexOf(item);
      const capitalize = item[0].toUpperCase() + item.slice(1, item.length);
      arr.splice(index, 1, capitalize);

      //item = item[0].toUpperCase() + item.slice(1, item.length);
      

      //console.log(item[0].toUpperCase() + item.slice(1, item.length));
      
  }
  return arr.join('')
}
const result = camelize('border-left-width');
console.log(result);