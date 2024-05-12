const cityName = document.getElementById('cityName')
const submitbtn = document.getElementById('submitBtn')

const city_name = document.getElementById('city_name')

const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')

// const temp = document.getElementById('temp')
const getinfo = async (event)=>{

    event.preventDefault();
    
    let cityVal = cityName.value

    if(cityVal === ""){
         city_name.innerText = `plz write the name before search`
         datahide.classList.add('data_hide')
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=09b740a7bca53f57aa0359e60dec3119`
            const response = await fetch(url);

            const data = await response.json();
            // console.log(data)
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;
            
            const tempmood = arrData[0].weather[0].main;

            if(tempmood=="Sunny"){
                temp_status.innerHTML= "<img src='images/sunny.png' alt='Sunny' class='img-fluid' title='Sunny'>"
            }
            else if(tempmood=="Clouds"){
                temp_status.innerHTML= "<img src='images/cloudy.png' alt='Coudy' class='img-fluid' title='Cloudy'>"
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML= "<img src='images/rainy.png' alt='Rainy' class='img-fluid' title='Rainy'>"
            }
            else if(tempmood=="Haze"){
                temp_status.innerHTML= "<img src='images/haze.png' alt='Haze' class='img-fluid' title='Haze'>"
            }
            else{
                temp_status.innerHTML= "<img src='images/others.png' alt='Other' class='img-fluid' title='Other'>"
            }

            datahide.classList.remove('data_hide')

        }catch(error){
            console.log(error);
            city_name.innerText = `plz enter the city name properly` 
            datahide.classList.add('data_hide')
        }
       
    }
    
}
submitbtn.addEventListener('click',getinfo)




// //http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=09b740a7bca53f57aa0359e60dec3119