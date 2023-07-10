const keyid="b1331c7c48ff419e06075e8f79b4fed1";
        const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const icon=document .querySelector(".weather-icon");

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        async function checkWeather(city){
        const response=await fetch(url + city + `&appid=${keyid}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
        }
        else{
            document.querySelector(".error").style.display="none"
            var data =await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

        if(data.weather[0].main=="Clouds"){
            icon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            icon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            icon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            icon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            icon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Snow"){
            icon.src="images/snow.png";
        }
        }
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });