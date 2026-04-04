const apiKey = "33f91fb51e8749ccb7a194051260204";
let cityName;
let myInput = document.querySelector("#search-input");
let mycity = document.querySelector(".city-name");
let mySearchBtn = document.querySelector("#search-botton");
let myTemprature = document.querySelector(".temprature");
let myDate = document.querySelector(".date");
let year = new Date().getFullYear();
let mm = new Date().getMonth() + 1;
let day = new Date().getDate();
let myHumidity = document.querySelector(".humidity");

myDate.textContent = `${day}/${mm}/${year}`;

mySearchBtn.addEventListener("click", () => {
  cityName = myInput.value;
  mycity.textContent = myInput.value;
  weatherData().then((data) => {
    myHumidity.textContent = data.current.humidity;
    myTemprature.textContent = data.current.temp_c + " " + "°C";
  });
});

async function weatherData() {
  try {
    let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`);
    let data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
