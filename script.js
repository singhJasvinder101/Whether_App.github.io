const url1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'de8219afddmshd51ae0c2b18a40fp1ca41cjsn6435b4b8439f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
window.addEventListener('load', () => {
    console.log("loaded")
});

// let cloud_pct = document.getElementById('cloud_pct')
fetch(url1, options)
    .then(res => { return res.json() })
    .then(response => {
        console.log(response)

        document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        // min_temp.innerHTML = response.min_temp
        // max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.log(err))

//     let windSpeed = document.querySelector(".wind_speed");
// // let listParent = document.querySelector(".list_parent");
// //     btn1.addEventListener("click", ()=>{
// //         // const li = document.createElement("li")
// //         // let li = `<li id="sunrise">--Sunrise</li><li id="sunset">--Sunset</li><li id="wind_degrees">--Wind Degrees</li>`
// //         // btn1.style.display = "none";
// //         // windSpeed.innerHTML = li;
// //     });

const btn = document.querySelector("#btn1");
const extraText = document.querySelector(".extra-text");

window.addEventListener("load", ()=>{
    btn.style.display = "inline-block"
})
btn.addEventListener("click", () => {
    btn.style.display = "none";
    extraText.classList.add("show");
});


const btn2 = document.querySelector("#btn2");
// seprate classes bcoz when one button is pressed all contents were opened
const extraText2 = document.querySelector(".extra-text2");

btn2.addEventListener("click", () => {
  btn2.style.display = "none";
  extraText2.classList.add("show2");
});

const btn3 = document.querySelector("#btn3");
// seprate classes bcoz when one button is pressed all contents were opened
const extraText3 = document.querySelector(".extra-text3");

btn3.addEventListener("click", () => {
  btn3.style.display = "none";
  extraText3.classList.add("show3");
});

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior
    let val = document.getElementById("search").value; // get the value of the search input field
    localStorage.setItem("searchQuery", val); // store the search value in localStorage
    window.location.href = "searchPage.html?q=" + encodeURIComponent(val); // redirect to the searchPage.html file with the search query as a parameter
  });
  


fetch(url2, options)
    .then(res => { return res.json() })
    .then(response => {
        console.log(response)

        document.getElementById("cloud_pct2").innerHTML = response.cloud_pct;
        temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        // min_temp.innerHTML = response.min_temp
        // max_temp.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees2.innerHTML = response.wind_degrees
        sunrise2.innerHTML = response.sunrise
        sunset2.innerHTML = response.sunset

    })
    .catch(err => console.log(err))


fetch(url3, options)
    .then(res => { return res.json() })
    .then(response => {
        console.log(response)

        document.getElementById("cloud_pct3").innerHTML = response.cloud_pct;
        temp3.innerHTML = response.temp
        // feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        // min_temp3.innerHTML = response.min_temp
        // max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset

    })
    .catch(err => console.log(err))