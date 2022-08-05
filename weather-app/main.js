console.log('this works.')

const API_KEY = config.WEATHER_TOKEN;

const input = document.querySelector('input');
const button = document.querySelector('button');

function getWeatherData(zip){

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`

  fetch(WEATHER_URL)
  .then((response) => response.json())
  .then((data) => {
    let h2 = document.querySelector('h2');
    let p = document.querySelector('p');

    // kelvin to celsius conversion
    let celsius = Math.round(data.main.temp - 273.15);

    h2.textContent = data.name;
    p.textContent = `${celsius} degrees`;
  });
}
// function to grab content from zipcode input field
function getZipCode(event){
  event.preventDefault();
  let zipcode = input.value;
  getWeatherData(zipcode)
}

button.addEventListener('click', getZipCode)
