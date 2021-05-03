$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();

        searchWeather(searchValue);

        // clear text
        $("#search-value").val("");
    });

    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?zip=" + searchValue + "&appid=0f0a9215395e52c856561423d99593af&units=imperial",
            dataType: "json",
            success: function (data) {

                // html for weather
                var cityDate = $("<h1>").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var today = $("<p>");
                var wind = $("<p>").text("Wind Speed: " + data.wind.speed + " MPH");
                var humidity = $("<p>").text("Humidity: " + data.main.humidity + "%");
                var temperature = $("<p>").text("Temperature: " + data.main.temp + " °F");
                var weather = $("<p>");
                var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

                // display
                cityDate.append(img);
                weather.append(cityDate, temperature, humidity, wind);
                today.append(weather);
                $("#today").append(today);
            }
        });
    }
});
