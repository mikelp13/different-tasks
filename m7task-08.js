const boxesContainerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('[type="number"]');
const createBtnRef = document.querySelector('[data-action="render"]');
const deleteBtnRef = document.querySelector('[data-action="destroy"]');

let amount = 0;

inputRef.addEventListener('input', event => {
  amount = event.target.value;
});

createBtnRef.addEventListener('click', () => {
  createBoxes(amount);
})

deleteBtnRef.addEventListener('click', () => {
  destroyBoxes();
})

function createBoxes(amount) {
  const firstBoxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let size = firstBoxSize + i * 10;
    let box = document.createElement('div');
    box.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${random()} , ${random()} , ${random()})`;
    boxesContainerRef.append(box);
  }
};

function destroyBoxes(){
  boxesContainerRef.innerHTML = '';
}

function random() {
  return Math.round(Math.random() * 256);
}
