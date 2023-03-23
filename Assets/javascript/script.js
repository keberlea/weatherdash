//search variablesS

var searchFormEl = document.querySelector(".form");
var cityInputEl = document.getElementById("city-input").value;
var searchButtonEl = document.querySelector(".search-btn");
var cityResultEl = document.querySelector(".city-result");
var fiveDayEl = document.querySelector("#fiveDay");
var searchedCityEl = document.querySelector("#searchedCity");




//current forcast variables
var tempForecastEl = document.querySelector(".temp");
var windForecastEl = document.querySelector(".wind");
var humidityForecastEl = document.querySelector(".humidity");
var weatherResultsEl = document.querySelector(".weather-results");
var currentConditionsEl = document.querySelector(".current-condition");
var cityList = [];


// event listener for the search button click
searchButtonEl.addEventListener("click", citySearch);
//${'.search-btn'}.on(citySearch)

// Function to search for a city
var citySearch = function () {
    // obtain input from user
    var cityName = cityInputEl;
    weatherSearch(cityName);
    console.log(cityName)
  };
   var countryCode = 'US'

  var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "," + countryCode + "&limit=5&appid=7d1b285353ccacd5326159e04cfab063"
  fetch(geoUrl)
    
  //Convert the response into JSON. Lastly, we return the JSON-formatted response, as follows:
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    geoLon = data[0].lon;
    geoLat = data[0].lat;

    var weatherSearch = function() {
        var APIKey = "9b9d5a244d38b072822e7b010a887234"
        var requestWeather =  "https://api.openweathermap.org/data/2.5/onecall?lat=" + geoLat + "&lon="+ geoLon + "&exclude=minutely,hourly,alerts&units=imperial&appid= ${APIKey}";;
        fetch (requestWeather)
        .then(function (data) {
            return data.json();
        })
    }
  });
    
/*

//Populate city information
var weatherSearch =  function(){
    var APIKey = "9b9d5a244d38b072822e7b010a887234"
    var requestWeather =  `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${APIKey}`;
    //fetch current weather
    fetch(requestWeather)
    .then(function (data) {
        return data.json();
    })
    .then(function (currentData){
        console.log(currentData);
        var urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude={part}&appid=${APIKey}&units=imperial`;      
        //fetch current weather
        fetch(urlOneCall)
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
*/



