var APIkey = "9b9d5a244d38b072822e7b010a887234"
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={9b9d5a244d38b072822e7b010a887234}"

fetch(queryURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
