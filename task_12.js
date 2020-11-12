// Task 12.
// -=Палиндром=-
// Палиндром — слово, предложение или последовательность символов,
//  которая абсолютно одинаково читается как в привычном направлении,
//  так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Постановка
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
//  если строка является палиндромом, и false — если нет.
//  При этом нужно учитывать пробелы и знаки препинания.
// palindrome("racecar") === true
// palindrome("table") === false

const palindrome = function (str) {
  const normalizedStr = str.toLowerCase().replace(/\s/g, ''); // нормалізуємо рядок з урахуванням пробілів та приводимо до нижнього регістру

  const reverseStr = normalizedStr.split('').reverse().join('');

  if (normalizedStr === reverseStr) {
    console.log(`String ${str} is a palindrome`);
    return true;
  } else {
    console.log(`String ${str} is not a palindrome`);
    return false;
  }
};

palindrome('racecar');

