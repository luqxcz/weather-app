let weather = {
  "apiKey": "a5a59e2f99b2037df92d3effea135978",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
  },
  displayWeather: function (data) {

  }
}