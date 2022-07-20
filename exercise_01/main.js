// prompts
let n = prompt('Input a noun: ')
let v = prompt('Input a verb: ')
let a = prompt('Input an adjective: ')

// grab the DOM element
let greeting = document.querySelector('.greeting');

// create <p> tag
// put that text into the p tag
// append the p tag to the .greeting 


function generatePoem(noun, verb, adjective){
  let paragraph = document.createElement('p')
  paragraph.classList.add('list-item')

  paragraph.innerText = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
  
  greeting.appendChild(paragraph)
}

generatePoem(n, v, a)