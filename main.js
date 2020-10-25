//DOM elements
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const date = document.querySelector('.date');
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
const imageList = [];
const base = ['./assets/images/night/', './assets/images/morning/', './assets/images/day/', './assets/images/evening/'];
const btn = document.querySelector('.btn');
const btnQuote = document.querySelector('.btn-quote');
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
let current = 0;
const weatherIconBig = document.querySelector('.weather-icon');
const weatherIconSmall = document.querySelector('.weather-icon-small');
const temperature = document.querySelector('.temperature');
const temperatureSmall = document.querySelector('.temperature-small');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const weatherHumidity = document.querySelector('.weather-humidity');
const weatherHumiditySmall = document.querySelector('.weather-humidity-small');
const weatherWind = document.querySelector('.weather-wind');
const weatherWindSmall = document.querySelector('.weather-wind-small');
const wrongCity = document.querySelector('.wrongCity');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

//Generate Array of images
function GenerateArrayOfImages() {

    for (let i = 0; i < 4; i++) {
        shuffle(images);
        for (let j = 0; j < 6; j++) {
            imageList.push(base[i].toString() + images[j].toString());
        }
    }
    return imageList;
}

//Show Time
function showTime() {
    let today = new Date();
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    week = today.getDay(),
    day = today.getDate(),
    month = today.getMonth();
    
//outputTime
    date.innerHTML = `${getWeekDay(week)}, ${getMonthName(month)} ${day}`;
    // time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    hours.innerHTML = `${addZero(hour)}`;
    minutes.innerHTML = `${addZero(min)}`;
    seconds.innerHTML = `${addZero(sec)}`;
    setTimeout(showTime, 1000);
} 

//Get Names of Months And Days
function getWeekDay(date) {
    let days = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date];
}

function getMonthName (date) {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[date];
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background
function SetBackground() {
    let today = new Date(),
        hour = today.getHours();
        current = imageList.indexOf(imageList[hour]);
        document.body.style.backgroundImage = "url(" + String(imageList[current]) + ")";
}

const img = document.createElement('img');
//Change Background
function ChangeBackground() {
    let today = new Date(),
        hour = today.getHours();
        btn.disabled = true;
        current++;
        img.src = imageList[current%24];
        img.onload = () => {      
            document.body.style.backgroundImage = "url(" + String(img.src) + ")";
        }; 
        setTimeout(function() { btn.disabled = false }, 1000);
}

//Set Background And Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();        
        if ((min == 0) && (sec == 0)) {
            current = imageList.indexOf(imageList[hour]);
            img.src = imageList[current];
            img.onload = () => {      
            document.body.style.backgroundImage = "url(" + String(img.src) + ")";
        }; 
        btn.disabled = true;
        setTimeout(function() { btn.disabled = false }, 1000);
        }
    switch(true) {
        //Nigth
        case (hour >= 0 && hour < 6) :
            greeting.textContent = "Доброй ночи, ";
            break;
        //Morning
        case (hour >= 6 && hour < 12) :
            greeting.textContent = "Доброе утро, ";
            break;
        //Day
        case (hour >= 12 && hour < 18) :
            greeting.textContent = "Добрый день, ";
            break;
        //Evening
        case (hour >= 18) :
            greeting.textContent = "Добрый вечер, ";
            break;
    }
    setTimeout(setBgGreet, 1000);
}

//NAME
//GetName
function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = ' [Enter Name]';
      localStorage.setItem('name', name.textContent);
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
  
// Set Name
function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
          if (name.textContent == '')
            name.textContent = localStorage.getItem('name');
        else
        localStorage.setItem('name', name.textContent);
        name.blur();
      }
    } 
    else {
      localStorage.setItem('name', name.textContent);
    }
  }

//Check Name
function checkName() {
    if ((name.textContent == '') || (name.textContent.trim().length == 0))
     name.textContent = localStorage.getItem('name');
     else {
        localStorage.setItem('name', name.textContent);
        name.textContent = localStorage.getItem('name');
     }
}

//FOCUS
// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
      localStorage.setItem('focus', focus.textContent);
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
  
// Set Focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
          checkFocus();
        localStorage.setItem('focus', focus.textContent);
        focus.blur();
      }
    } 
    else {
      localStorage.setItem('focus', focus.textContent);
    }
  }

//checkFocus
    function checkFocus() {
        if ((focus.textContent == '') || (focus.textContent.trim().length == 0))
            focus.textContent = localStorage.getItem('focus');
        else {
            localStorage.setItem('focus', focus.textContent);
        focus.textContent = localStorage.getItem('focus');
     }
}

//QUOTE
//getQuote
async function getQuote() {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    let rand = Math.floor(Math.random() * data.length);
    blockquote.textContent = data[rand].text;
    if (data[rand].author == null)
    figcaption.textContent = 'unknown author'
    else
    figcaption.textContent = data[rand].author;
}

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

//WEATHER
async function getWeather() {
    
    if ((city.textContent !== "[Enter City]") && (city.textContent !== null))
        {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=0601969aaed7bdaf8450d447f660617a&units=metric`;
            const res = await fetch(url);
            const data = await res.json(); 
            if ((data["message"] === "city not found")) {
                wrongCity.textContent = "City is not found!";
                weatherIconBig.style.display = "none";
                weatherIconSmall.style.display = "none";
                temperature.textContent = "";
                weatherHumidity.textContent = "";
                weatherWind.textContent = "";
                weatherDescription.textContent = "";
                temperatureSmall.textContent = "";
                weatherHumiditySmall.textContent = "";
                weatherWindSmall.textContent = "";

            } else {
            wrongCity.textContent = "";
            weatherIconBig.style.display = "inline-block";
            weatherIconSmall.style.display = "inline-block";
            weatherIconBig.className = 'weather-icon owf owf-5x';
            weatherIconSmall.className = 'weather-icon-small owf owf-5x';
            weatherIconBig.classList.add(`owf-${data.weather[0].id}`);
            weatherIconSmall.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = 'Температура: ' + `${data.main.temp.toFixed()}°C`;
            weatherHumidity.textContent = `Влажность: ${data.main.humidity}%`;
            weatherWind.textContent = `Скорость ветра: ${data.wind.speed} м/с`;
            weatherDescription.textContent = ucFirst(`${data.weather[0].description}`);
            temperatureSmall.textContent = `${data.main.temp}°C`;
            weatherHumiditySmall.textContent = `${data.main.humidity}%`;
            weatherWindSmall.textContent = `${data.wind.speed} m/s`;
            }
        }

        setTimeout(() => {
            getWeather();
        }, 1800000);
}

  function getCity() {
    if (localStorage.getItem('city') === null) {
      city.textContent = '[Enter City]';
      localStorage.setItem('city', city.textContent);
    } else {
      city.textContent = localStorage.getItem('city');
      getWeather();
    }
  }

  function setCity(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            checkCity();
          localStorage.setItem('city', city.textContent);
          getWeather();
          city.blur();
        }
  }
}

  function checkCity() {
    if ((city.textContent == '') || (city.textContent.trim().length == 0))
        city.textContent = localStorage.getItem('city');
    else {
        localStorage.setItem('city', city.textContent);
        city.textContent = localStorage.getItem('city');
        getWeather();
    }
}


  setInterval(() => {
      if (city.textContent !== "[Enter City]")
      getWeather();
  }, 60000);

  name.addEventListener('click', function() {
    name.textContent = '';
  });
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', checkName);

  focus.addEventListener('click', function() {
    focus.textContent = '';
  });
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', checkFocus);

  btn.addEventListener('click', ChangeBackground);
  document.addEventListener('DOMContentLoaded', getQuote);

  btnQuote.addEventListener('click', getQuote);

  city.addEventListener('click', function() {
    city.textContent = '';
  });
  city.addEventListener('keypress', setCity);
  city.addEventListener('blur', checkCity);

//Run
showTime();
setBgGreet();
getName();
getFocus();
GenerateArrayOfImages();
SetBackground();
getCity();
