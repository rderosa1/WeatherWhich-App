BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q="
API_KEY = "APPID=af8425eab3b3aa4292a1f637f44d97de"
const button = document.querySelector(".press")
const cityOption = document.querySelector("input")
const weatherDiv =  document.querySelector(".weatherData")
const moreButton = document.querySelector(".moreButton")
const hiddenDiv = document.querySelector(".hidden")
const main = document.querySelector("main")
const cityArray = ["new york", "london", "paris", "hong kong", "guadalajara", "los angeles", "tokyo", "bangkok", "dubai", "singapore"]

button.addEventListener("click", async () => {

    let cityName = cityOption.value

    let response = await axios.get(`${BASE_URL}${cityName}&${API_KEY}&units=imperial`)
    console.log(response.data)


    let condition = response.data.weather[0].description
    let temp = response.data.main.temp
    let feelsLike = response.data.main.feels_like
    let minTemp = response.data.main.temp_min
    let maxTemp = response.data.main.temp_max
    
    weatherDiv.innerHTML = `<p>Currently: ${condition} at ${temp}° F </p> <br> <p> Feels like: ${feelsLike}° F</p>` 
    
    hiddenDiv.innerHTML = `<p>Daily Minimum Temp: ${minTemp}° F</p> <br> <p>Daily Maximum Temp: ${maxTemp}° F</p>`
    

})


button.addEventListener("click", () => {
    let city = cityOption.value
    if(city == "london"){ 
        main.style.backgroundImage = "url('images/London_pic.jpg')";
    } else if (city == "new york") {
        main.style.backgroundImage = "url('images/ny_pic.jpg')";
    } else if (city == "paris") {
        main.style.backgroundImage = "url('images/paris.jpg')";
    } else if (city == "hong kong") {
        main.style.backgroundImage = "url('images/hong_kong.jpg')"
    } else if (city == "guadalajara") {
        main.style.backgroundImage = "url('images/guadalajara.jpeg')"
    } else if (city == "los angeles") {
        main.style.backgroundImage = "url('images/la_pic.jpeg')";
    } else if (city == "tokyo") {
        main.style.backgroundImage = "url('images/tokyo.jpeg')";
    } else if (city == "bangkok") {
        main.style.backgroundImage = "url('images/bangkok.jpeg')";
    } else if (city == "dubai") {
        main.style.backgroundImage = "url('images/dubai.jpeg')";
    } else if (city == "singapre"){
        main.style.backgroundImage = "url('images/singapore.jpeg')";
    } else {
        main.style.backgroundImage = "url('images/colorful-city-silhouette.jpg')";
    }

})


moreButton.addEventListener("click", () => {
    hiddenDiv.classList.toggle("appear")
    if (moreButton.textContent === "More?") {
        moreButton.textContent = "Less?"
    } else if (moreButton.textContent === "Less?") {
        moreButton.textContent = "More?"
    }

})

