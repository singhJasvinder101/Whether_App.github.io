let searchQuery = localStorage.getItem("searchQuery");
// console.log(searchQuery); // will log the search query to the console
let val = searchQuery;

document.getElementById("searchForm2").addEventListener("submit", function(event) {
//   event.preventDefault(); 
  let valu = document.getElementById("search").value;
  localStorage.setItem("searchQuery", valu);
  
  // Retrieve the updated value of "searchQuery" from the local storage
  searchQuery = localStorage.getItem("searchQuery");
  console.log(searchQuery); // will log the updated search query to the console
  val = valu;
});


// let url = `https://open-weather13.p.rapidapi.com/city/landon`
let url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${val}&format=json&u=f`
const options = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': '7a68bf9c04mshf8ffa63ab9e489fp162c9djsn0fb1dac21cb7',
        'X-RapidAPI-Key': '13479e5d4dmsh2345d47b96eec03p1c6661jsne3fe451f520b',

        // 'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
}

city.innerHTML = val.charAt(0).toUpperCase() + val.slice(1, val.length);

fetch(url, options)
    .then(res => { return res.json() })
    .then(response => {
        console.log(response)
        let currMousam = response.current_observation.condition.text
        document.getElementById("currMousam").innerHTML = currMousam;

        let temperatureF = response.current_observation.condition.temperature
        document.getElementById("tempF").innerHTML = temperatureF;
        let temperatureC = Math.floor(5/9*(temperatureF-32))
        document.getElementById("tempC").innerHTML = temperatureC;

        let sunset = response.current_observation.astronomy.sunset;
        let sunrise = response.current_observation.astronomy.sunrise;
        sunriseIcon.src = './images/sunny.png'
        document.getElementById("sunrise").innerHTML = sunrise;

        sunsetIcon.src = './images/sunset.png'
        document.getElementById("sunset").innerHTML = sunset

        let forcast = response.forecasts;
        let weatherIcons = document.querySelectorAll('.weather-icon');
        // fault it was selected out of loop so not initialized for each 1 this is alse method
        let dayweather = document.querySelectorAll('.day-weather')

        forcast.forEach((item, index) => {
            let weatherText = item.text.toLowerCase();
            // let dayweather = document.querySelector('.day-weather')
            // let day = item.day;
            
            console.log(weatherText);

            if (weatherText.includes('sunny') || weatherText.includes('clear')) {
                weatherIcons[index].src = './images/sunny.png';
                dayweather[index].innerHTML = weatherText
                
            } else if (weatherText.includes('cloudy') || weatherText.includes('overcast')) {
                weatherIcons[index].src = './images/cloudy.png';
                dayweather[index].innerHTML = weatherText
                
            } else if (weatherText.includes('rain') || weatherText.includes('showers')) {
                weatherIcons[index].src = './images/showers.png';
                dayweather[index].innerHTML = weatherText
            } else {
                weatherIcons[index].src = './images/thunderstorm.png'; // set a default image
                dayweather[index].innerHTML = weatherText
            }
        });

    })
    .catch(err => console.log(err))
      
