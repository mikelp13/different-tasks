// Task 10.
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
//

const str = 'A room without books is like a body without a soul';

const getVowelLetter = function (str) {

  const letterArr = str.toLowerCase().split('');
  const vowelArr = [];


  for (const letter of letterArr) {
    
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      vowelArr.push(letter);
    }
  }

  let result = `Речення складається з ${vowelArr.length} голосних літер: ${vowelArr}`;
  console.log(result);

  return result;
};

getVowelLetter(str);
