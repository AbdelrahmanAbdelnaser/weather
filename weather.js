const apiKey = "33f91fb51e8749ccb7a194051260204";
let myInput = document.querySelector("#search-input");
let mycity = document.querySelector(".city-name");
let mySearchBtn = document.querySelector("#search-button");
let myTemprature = document.querySelector(".temprature");
let myDate = document.querySelector(".date");
let myHumidity = document.querySelector(".humidity");

myDate.textContent = date();

function date() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  return `${day}/${month}/${year}`;
}

async function getData(city) {
  try {
    let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    if (!res.ok) throw new Error("City Not Found");
    let data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
    return null;
  }
}
async function displayWeather(data) {
  myHumidity.textContent = data.current.humidity;
  myTemprature.textContent = data.current.temp_c + " °C";
}

mySearchBtn.addEventListener("click", async () => {
  let city = myInput.value;
  if (!city) {
    alert("Enter city name");
    return;
  }
  mycity.textContent = city;
  let data = await getData(city);
  displayWeather(data);
});
