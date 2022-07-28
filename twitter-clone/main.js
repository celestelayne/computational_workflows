console.log('this works')

//---------- SELECTORS

let form = document.querySelector('form');
let tweetInput = document.querySelector('input');
let submittweetButton = document.querySelector('button');
let tweetContainer = document.querySelector('ul');

let tweetCount = document.querySelector('.tweet_count')

let count = 30;
tweetCount.innerText = count;

//---------- OBJECT SETUP

let tweets = {
  "tweetList": []
}

//---------- EVENT LISTENERS

window.addEventListener("load", pageLoadFn)
submittweetButton.addEventListener('click', addTweet);
tweetInput.addEventListener('keyup', updateTweetCount);

setTimeout(() => {
  localStorage.removeItem("tweets")
  console.log("Delayed for 1 second.");
}, "1000")

//---------- EVENT HANDLERS (callback functions)

function pageLoadFn(event){
  if(localStorage.getItem('tweets') === null){
    return
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'))
    tweets.tweetList.forEach(displayTweet)
  }
}

function updateTweetCount(event){
  if(event.code == 8){
    count += 1
    tweetCount.innerText = count
  } else {
    count -= 1
    tweetCount.innerText = count
  }

  if(count <= 5){
    tweetCount.style.color = 'red'
    tweetCount.style.fontWeight = 'bold'
  } else {
    tweetCount.style.color = 'grey'
    tweetCount.style.fontWeight = 'normal'
  }
}


function addTweet(event){
  event.preventDefault()
  console.log('click button')

  let newTweet = tweetInput.value;

  tweetObject = {
    account: 'Celeste Layne',
    twitterHandle: '@bot',
    name: newTweet
  }
  count = 30
  tweetCount.innerText = 30

  displayTweet(tweetObject)

  tweets.tweetList.push(tweetObject)

  localStorage.setItem("tweets", JSON.stringify(tweets))
}

function displayTweet(tweet){
  console.log(tweet)

  if(tweet === "") return null;

  let accountName = 'Celeste Layne'
  let twitterHandle = '@bot'

  let newListItem = document.createElement('li')

  newListItem.textContent = `${accountName} ${twitterHandle} ${tweet.name}`

  if(tweet.length > count){
    console.log('more than 30 characters')
  } else {
    tweetContainer.prepend(newListItem)
  }
  form.reset()
}