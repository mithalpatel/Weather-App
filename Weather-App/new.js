// API_KEY = "49b7b72761bf75e4383ed611d3c85747";
const weatherApi = () => {
  let city = document.getElementById("searchCity").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${"49b7b72761bf75e4383ed611d3c85747"}`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((data) => {
      searchWeather(data);
    });
};

const searchWeather = (weatherData) => {
  let weather = document.getElementById("climate");
  if (weatherData === "400" || weatherData === "404") {
      alert("No city found");
  } else {
    let tempDigits = (weatherData.main.temp / 10).toFixed(2);
    let weatherTemp = document.getElementById("weather");
    let temperature = document.getElementById("temprature");
    let scatteredClouds = document.getElementById("scatteredClouds");
    let humidityValue = document.getElementById("humidity");
    let windSpeedValue = document.getElementById("windSpeed");
    weatherTemp.innerHTML = `Weather in ${weatherData.name}`;
    temperature.innerHTML = tempDigits + "°C";
    scatteredClouds.innerHTML = `<i class="fa-solid fa-cloud" aria-hidden="true"></i> ${weatherData.weather[0].description}`;
    humidityValue.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    windSpeedValue.innerHTML = "Wind Speed: " + weatherData.wind.speed + "km/h";
  }
}