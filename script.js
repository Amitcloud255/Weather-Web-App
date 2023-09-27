const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const max_temp = document.getElementById('max_temp');
const min_temp = document.getElementById('min_temp');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const wind_degree = document.getElementById('wind_degree');
const wind_speed = document.getElementById('wind_speed');

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(url + city, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (temp) temp.innerHTML = data.temp;
      if (feels_like) feels_like.innerHTML = data.feels_like;
      if (humidity) humidity.innerHTML = data.humidity;
      if (max_temp) max_temp.innerHTML = data.max_temp;
      if (min_temp) min_temp.innerHTML = data.min_temp;
      if (sunrise) sunrise.innerHTML = data.sunrise;
      if (sunset) sunset.innerHTML = data.sunset;
      if (wind_degree) wind_degree.innerHTML = data.wind_degree;
      if (wind_speed) wind_speed.innerHTML = data.wind_speed;
    })
    .catch(err => {
      console.error(err);
    });
};

const Submit = document.getElementById('Submit');
if (Submit) {
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityValue = document.getElementById('city').value;
    getWeather(cityValue);
  });
}
getWeather("Delhi");
