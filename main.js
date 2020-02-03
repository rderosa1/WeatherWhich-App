BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q="
API_KEY = "APPID=af8425eab3b3aa4292a1f637f44d97de"
const button = document.querySelector("button")
const cityOption = document.querySelector("input")
const mainDiv =  document.querySelector(".main")
const moreButton = document.querySelector(".moreButton")
const hiddenDiv = document.querySelector(".hidden")

button.addEventListener("click", async () => {

    let cityName = cityOption.value
    let response = await axios.get(`${BASE_URL}${cityName}&${API_KEY}&units=imperial`)
    console.log(response.data)


    let condition = response.data.weather[0].description
    let temp = response.data.main.temp
    let feelsLike = response.data.main.feels_like
    let minTemp = response.data.main.temp_min
    let maxTemp = response.data.main.temp_max
    
    mainDiv.innerHTML = `<p>Currently: ${condition} at ${temp}° F </p> <br> <p> Feels like: ${feelsLike}° F</p> <br>` 
    
    hiddenDiv.innerHTML = `<p>Daily Minimum Temp: ${minTemp}° F</p> <br> <p>Daily Maximum Temp: ${maxTemp}° F</p>` 


})

moreButton.addEventListener("click", () => {
    hiddenDiv.classList.toggle("appear")
    moreButton.textContent = "Less?"
})




// ***********Rick and Morty */

// const BASE_URL = "https://rickandmortyapi.com/api/"
// const button = document.querySelector("button");
// const rickAndMorty = document.querySelector("input");

// button.addEventListener("click", async () => {
//     let episode = rickAndMorty.valuelet response = axios.get(`${BASE_URL}/episode/${episode}`)
//     console.log(response.data.name)
// })


// //********Star Wars

// const BASE_URL = "https://swapi.co/api/"
// const button = document.querySelector("button")
// const swInput = document.querySelector("input")


// button.addEventListener("click", async () => {
//     let planet = swInput.value
//     let response = axios.get(`${BASE_URL}species/3/`)
//     console.log(response)

// })




// // ********************* GIPHY ******************** //

// const BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=" ;
// const API_KEY = "i3YW1Gm0egw4MFKjD0qi8mAKKbahK5ZY"
// const button = document.querySelector("button")
// const giph = document.querySelector("input")

// button.addEventListener("click", async () => {
//     let giphSearch = giph.value
//     let response = await axios.get(`${BASE_URL}${API_KEY}&q=${giphSearch}`)
//     let  giphList= response.data.data
//     console.log(response)

//     const myDiv = document.createElement("div")
//     document.body.appendChild(myDiv)

 
//     })




// ****************** POKEMON ********************* //

// const BASE_URL = 'https://pokeapi.co/api/v2/' ;
 
// const pokemon = document.querySelector("input");
// const button = document.querySelector("button");
// const myDiv = document.createElement("div")
// document.body.appendChild(myDiv);


// button.addEventListener('click', async () => {
// let pokemonName = pokemon.value;
// let response = await axios.get(`${BASE_URL}pokemon/${pokemonName}/`)
// console.log(response);
//     let pokePicBack = response.data.sprites.back_shiny
//     let pokePicFront = response.data.sprites.front_shiny

//     myDiv.innerHTML = `<img src = "${pokePicBack}"> <img src = "${pokePicFront}">`
    

// })