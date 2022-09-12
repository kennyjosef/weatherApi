let paragraph = document.getElementById('para')
const country = document.getElementById('country')
const city = document.getElementById('city')
const humidity = document.getElementById('humidity')
const rain = document.getElementById('rain')
const describe = document.getElementById('describe')
const icony = document.getElementById('icony')
const temp = document.getElementById('temp')
const date = new Date()
const deg=`%`
// const deg=`˚ C`
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
        //  paragraph.textContent=JSON.stringify(data)

        country.textContent=` Country: ${data.sys.country}`
        humidity.textContent=`${data.main.humidity} ${deg}`
        city.textContent= `City: ${data.name}`
        describe.textContent=data.weather[0].description
        rain.textContent=data.weather[0].main
        temp.textContent= data.main.temp_min
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
})





// let btn= document.getElementById('btn')
// btn.addEventListener("click",function(){
// paragraph.innerText="this is another text"
// paragraph.style.color='red'
// paragraph.style.border='2px solid blue'

// })
