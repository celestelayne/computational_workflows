// console.log('this works');

let counterResultElem = document.querySelector('.counter-result');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

counterMinusElem.addEventListener('click', decrement);
counterPlusElem.addEventListener('click', increment);

let counter = 0;

function decrement() {
  counter = counter - 1;
  counterResultElem.textContent = counter;
}

function increment() {
  counter = counter + 1;
  counterResultElem.textContent = counter;
}