//console.log("akshat");
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Please Enter The City Name!`;
        datahide.classList.add('data_hide');
    }else{
        try{
            datahide.classList.remove('data_hide');
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            let tempr = (arrData[0].main.temp-273.15).toFixed(1);
            temp.innerHTML = `<p>${tempr}&deg;C</p>`;
            // temp.innerHTML = "<p>&deg;C</p>";
            const tempMood = arrData[0].weather[0].main;
            if(tempMood=="Clear"){
               temp_status.innerHTML = "<i class='fas fa-sun' style='color:yellow'></i>";
            }
            if(tempMood=="Clouds"){
               temp_status.innerHTML = "<i class='fas fa-cloud' style='color:white'></i>";
            }
            if(tempMood=="Rain"){
               temp_status.innerHTML = "<i class='fas fa-rain' style='color:blue'></i>";
            }
            if(tempMood=="Haze"){
               temp_status.innerHTML = "<i class='fas fa-smog' style='color:gray'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:white'></i>";
            }
            // console.log(temp);
        }catch(err){
            // console.log(err);
            city_name.innerText = `Please Enter The Valid City Name!`;
            datahide.classList.add('data_hide');
        }
    }

}

searchBtn.addEventListener('click', getInfo);
