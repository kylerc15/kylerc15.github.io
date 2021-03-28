window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.hamButton');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);



const today = new Date();
const year = today.getFullYear();
const date = today.getDate();
const day = today.getDay();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()];

const formatDate = `${dayName}, ${date} ${monthName} ${year}`;
document.getElementById('curDate').innerHTML = formatDate.toLocaleString();

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=4bc5043b865ab98443e7950c385bf8e1&units=imperial';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const weather = jsonObject['weather'];
    
    const current = document.getElementById('current');
    current.innerHTML = weather[0].main;

    const main = jsonObject['main'];
    const high = document.getElementById('temp');
    high.innerHTML = main.temp_max;

    const humid = document.getElementById('humid');
    humid.innerHTML = main.humidity;

    const wind = jsonObject['wind'];
    const wspeed = document.getElementById('wSpeed');
    wspeed.innerHTML = wind.speed;

},);
});

const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&cnt=5&appid=4bc5043b865ab98443e7950c385bf8e1&units=imperial';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const forecast = jsonObject['list'];

    for (let i = 0; i < forecast.length; i++ ) {

        const temp = document.getElementById(i);
        temp.innerHTML = forecast[i].main.temp;
    }

    for (let i = 0; i < forecast.length; i++) {

        const iNum = i + 10
        const image = document.getElementById(iNum);
        const url = forecast[i].weather[0].icon;
        image.setAttribute('src', "http://openweathermap.org/img/wn/" + url + "@2x.png");

    }

const today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()];

    for (let i = 0; i < 5 ; i++) {
      
        const curDay = document.getElementById(i+5);

        const dayTest = today.getDay();

        const dayNum = dayTest + (i+1);

        curDay.innerHTML = days[dayNum].substr(0, 3);
    }
});

const requestURL2 = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    let event = document.getElementById("upevents");

    event.innerHTML = `<h5>${towns[2].events[0]}</h5>
                       <h5>${towns[2].events[1]}</h5>
                       <h5>${towns[2].events[2]}</h5>
                       <h5>${towns[2].events[3]}</h5>`

  });