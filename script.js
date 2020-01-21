let APIKey = "9386dfafb0bc66bc21c4bfdbfb3227d8";
let queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + APIKey;
let button = $(".button")

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(queryURL);
        console.log(response);
    });


