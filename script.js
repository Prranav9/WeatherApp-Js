const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  let city = input.value;
  getData(city);
});

function getData(city) {
  console.log(city);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"449941b24ad49ed556ff15f5f58a0ae4"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;
      const weatherCity = data.name;
      const weatherCountry = data.sys.country;

      weather.innerHTML = `${weatherCity},${weatherCountry}`;
      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      weatherTemp = weatherTemp.toFixed(2);

      const weatherDesc = data.weather[0].description;

      temperature.innerHTML = `${weatherTemp}°C`;
      description.innerHTML = `${weatherDesc}`;
    });
}
