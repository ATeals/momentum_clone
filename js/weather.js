const API_KEY = "e8009e2b5f984cab80d393bc9c9cbf6b";
const weatherText = document.querySelector(".weather__text");
const weatherIcon = document.querySelector(".weather__img");
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const temp = Math.floor(parseInt(data.main.temp));
            console.dir(data);
            weatherText.innerText = `${data.name} : ${data.weather[0].main} (${temp}°C)`;
            weatherIcon.src = `icons/${data.weather[0].icon}.png`;
        });

    console.log(lat, lon);
}

function onGeoError() {
    alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
