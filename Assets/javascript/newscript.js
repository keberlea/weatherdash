window.onload = function(){
    
//fetch("http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=faf2677a782ebea7b191852771b0d673")
  //.then((response) => response.json())
  //.then((data) => console.log(data));



//get result function

function getResult(){
    
    inputCity = document.getElementById('myInput').value();   
    var countryCode='US';    
    var cityCode = inputCity;  
    var geoLon;   
    var geoLat;

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + "," + countryCode + "&limit=5&appid=faf2677a782ebea7b191852771b0d673"

    fetch(requestUrl)
    .then(function (response){
        return response.json();
        
    })
    
    .then(function (data) {
        //geoLon = data[0].lon;
        geoLat = data[0].lat;

        var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + geoLat + "&lon="+ geoLon + "&exclude=minutely,hourly,alerts&units=imperial&appid=faf2677a782ebea7b191852771b0d673"
       
        fetch(weatherUrl)

          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);


    })
})
}
}


// event listener for search btn
document.getElementById("#searchbtn").addEventListener('click',getResult);
