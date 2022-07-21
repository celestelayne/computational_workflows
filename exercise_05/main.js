let counterResultElem = document.querySelector('.counter-result')
let btn = document.querySelector('button');
let btnGrp = document.querySelector('.button-group');

btn.addEventListener('click', addBtnToPage);

let counter = 0;

function addBtnToPage(){
  // console.log('adding new button')
  createNewBtn()
  increment()
  updateDisplay()
}

function createNewBtn() {
  const newBtn = document.createElement('button');
  newBtn.classList.add('flat');
  newBtn.innerText = "Hey";
  btnGrp.appendChild(newBtn)
}

function increment(){
  counter = counter + 1;
}

function updateDisplay(){
  counterResultElem.textContent = counter
}