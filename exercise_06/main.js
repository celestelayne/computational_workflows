console.log('this works');

let btn = document.querySelector('button');

function btnDownFn(){
  btn.classList.add('T-I-JW')
}

function btnUpFn(){
  btn.classList.remove('T-I-JW')
}

btn.addEventListener('mousedown', btnDownFn);
// btn.addEventListener('mouseup', btnUpFn);