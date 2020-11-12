
const getAlphabet = function () {
  let charIndex = 'a'.charCodeAt(0);
  // console.log(charIndex);
  let alphabet = '';
  console.log(alphabet);
  for (let i = 0; i < 26; i += 1) {
    alphabet += String.fromCharCode(charIndex);

    charIndex += 1;
  }
  return alphabet;
};
console.log(getAlphabet());
