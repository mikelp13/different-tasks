// find vowels leter

const string = 'lorem spam find you';

const searchLiteral = function (string) {
  const LITERAL = 'oeaiu';
  let total = 0;
  const wordsArr = string.split(' ');
  const symbolsArr = LITERAL.split('');
  console.log(symbolsArr);

  for (const word of wordsArr) {
    let letters = word.split('');
    for (const letter of letters) {
      let symbol = LITERAL.includes(letter);

      if(symbol){
       total+=1;
      }
    }
  }
  return total;
};

console.log(searchLiteral(string));

// вивести алфавіт



