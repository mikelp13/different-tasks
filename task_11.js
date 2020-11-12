// Task 11.
// -=Анаграмма=-
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// anagram('finder', 'Friend');
//

const anagram = function (firstWord, secondWord) {
  
  const normalizedFirstWord = firstWord
    .replace(/[\s.,%]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const normalizedSecondWord = secondWord
    .replace(/[\s.,%]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  normalizedFirstWord === normalizedSecondWord
    ? console.log(`${firstWord} and ${secondWord} is an anagram!`)
    : console.log(`${firstWord} and ${secondWord} is not an anagram!`);

};

anagram('finder', 'Friend');
