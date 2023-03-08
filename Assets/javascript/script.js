var weatherAPIKey = "9b9d5a244d38b072822e7b010a887234"



//
var weatherSearch =  function(cityname){
    var urlCurrentWeather="https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPIKey}&units=imperial";
    //fetch current weather
    fetch(urlCurrentWeather)
    .then(function (response) {
        return response.json();
    })
    .then(function (currentData){
        console.log(currentData);
    })

}