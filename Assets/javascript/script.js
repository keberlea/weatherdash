var searchFormEl = document.querySelector(".form");
var cityInputEl = document.quesrySelector(".city-input")
var searchButtonEl = document.querySelector(".search-btn");


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
            })
    })

}
