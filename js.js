let paragraph = document.getElementById('para')
const country = document.getElementById('country')
const city = document.getElementById('city')
const humidity = document.getElementById('humidity')
const rain = document.getElementById('rain')
const describe = document.getElementById('describe')
const icony = document.getElementById('icony')
const temp = document.getElementById('temp')
const windSpeeds = document.getElementById('wind-speed')
const date = new Date()
const per=`%`
const deg=`˚ C`
const windSpeed =`Km h`
let APIkey = '5d8a5939fd809096282dabfc1b75199c'
let baseURL ='https://api.openweathermap.org/data/2.5/weather'
 const getUserLocation = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(weatherDisplay)
    }else{
        alert('Geolocation is not supported by this browser')
    }
}

function weatherDisplay(position){
    fetch( `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIkey}`)
    .then((res)=> res.json())
    .then((data)=>{
        JSON.stringify(data)
        country.textContent=` Country: ${data.sys.country}`
        humidity.textContent=`${data.main.humidity} ${per}`
        city.textContent= `City: ${data.name}`
        describe.textContent=data.weather[0].description
        rain.textContent=data.weather[0].main
        const kelvin = data.main.temp
        const celsius =kelvin-273
        let fahrenheit =celsius*(9/5)+32
        fahrenheit=Math.floor(fahrenheit)
        temp.textContent= `${fahrenheit} ${deg}`
        windSpeeds.textContent=`${data.wind.speed} ${windSpeed}`
        icony.src=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    })
}


getUserLocation() 


paragraph.textContent=date.toLocaleString('en-GB');

function showWeather(){
    
    
}
const night = document.getElementById('mode')
const container= document.getElementById('container')
night.addEventListener('click', function(){
    container.classList.toggle('dark-mode')
    paragraph.classList.toggle('moda')
})





