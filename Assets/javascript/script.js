var searchFormEl = document.querySelector(".form");
var cityInputEl = document.quesrySelector(".city-input")
var searchButtonEl = document.querySelector(".search-btn");

//current forcast variables
var tempForecastEl = document.querySelector(".temp");
var windForecastEl = document.querySelector(".wind");
var humidityForecastEl = document.querySelector(".humidity");
var weatherResultsEl = document.querySelector(".weather-results");
var currentConditionsEl = document.querySelector(".current-condition")
var weatherAPIKey = "9b9d5a244d38b072822e7b010a887234"
var cityList = [];


//Populate city information
var weatherSearch =  function(cityname){
    var urlCurrentWeather="https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPIKey}&units=imperial";
    //fetch current weather
    fetch(urlCurrentWeather)
    .then(function (response) {
        return response.json();
    })
    .then(function (currentData){
        console.log(currentData);
        var urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude={part}&appid=${weatherAPIKey}&units=imperial`;      
        //fetch current weather
        fetch(urlCurrentWeather)
            .then(function(response){
                return response.json();
            })
            .then(function(fivedayData){
                console.log(fivedayData);
                //add city to local storage
                cityList.push(currentData.name);
                localStorage.setItem("cityList",JSON.stringify(cityList));
                populateCity();
                cityResultEl.innerHTML = currentData.name + dayjs().format(MM/DD/YYY) +
                `<img class="w-2"
                src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" />`;
                tempForecastEl.innerHTML = "Temp:" + fivedayData.current.temp + "°F";
                windForecastEl.innerHTML = "Wind:" + fivedayData.current.wind_speed;
                humidityForecastEl.innerHTML = "Humidity" + fivedayData.current.humidity;
                //current city 5-day forecast
                fiveDayEl.innerHTML = "";
          var card = "";
          for (let i = 1; i < 6; i++) {
            console.log(fivedayData.daily[i].weather[0].icon);
            card =
              card +
              `<div class="col-sm-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${dayjs(fivedayData.daily[i].dt,"X").format("MM/DD/YYYY")}</h5>
                            <img class="w-50" src="http://openweathermap.org/img/wn/${fivedayData.daily[i].weather[0].icon}@2x.png" />
                            <p class="card-text">Temp: ${fivedayData.daily[i].temp.day}°F</p>
                            <p class="card-text">Wind: ${fivedayData.daily[i].wind_speed}</p>
                            <p class="card-text">Humidity: ${fivedayData.daily[i].humidity}</p>
                        </div>
                    </div>
                </div>`;
          }
          fiveDayEl.innerHTML = card;
        });
    });
};

// Function to search for a city
var citySearch = function () {
    // obtain input from user
    var cityName = cityInputEl.value;
    weatherSearch(cityName);
  };
  
  // event listener for the search button click
  searchButtonEl.addEventListener("click", citySearch);
