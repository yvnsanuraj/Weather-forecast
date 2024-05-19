//Assigning values to the variables
let inputEle = document.getElementById('location-input');
let tempEle = document.getElementById('temp-value');
let locEle = document.getElementById('location');
let weatherDescEle = document.getElementById('weather-desc');
let btnEle = document.getElementById('btn');
let icon = document.getElementById('icon');

const apiKey = 'ae0d2fa8e79eabd3997342ec2dc54f80';

btnEle.addEventListener('click', function () {
    const loc = inputEle.value;

    if (loc === "") {
        alert('Enter the proper location');
    }
    else {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + loc + '&appid=' + apiKey;
        fetch(url).then(function (response) {
            return response.json(); //It will return a promise here
        }).then(function (data) {
            this.data = data;
            var temperature = Math.floor(((data.main.feels_like) - 273))
            tempEle.innerText = temperature;
            var desc = (data.weather[0].description).toLocaleUpperCase();
            weatherDescEle.innerHTML = desc;
            var cityName = (data.name).toLocaleUpperCase();
            locEle.innerHTML = cityName;
        }).catch(function (error) {
            alert('Please check the spelling once');
            console.log(error);
        })


    }
})

