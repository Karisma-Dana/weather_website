const apiKey = "3a2e57086ece7ac3c92339a819635df5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const city = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weathe-icon")


async function checkWeather(city){
    

    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".eror").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
    
        if(data.weather[0].main =="Clear"){
            weather.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weather.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Driz"){
            weather.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block" 
        document.querySelector(".eror").style.display = "none";

    }
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(city.value)
})











