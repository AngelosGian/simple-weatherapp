navigator.geolocation.getCurrentPosition((position) => {
    
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    
    const MY_KEY = '9c8c7922e9fd5eb703a4d593c73decc1';
       
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_KEY}` 
    
       fetch(url)
         .then(res => res.json()) // parse response as JSON
         .then(data => {
           console.log(data)
           let tempCelsius        = data.main.temp - 273.15
           let weatherDescription = data.weather[0].description 
          //  let descriptionType    = data.weather[0].main
           let humidity           = data.main.humidity
           let location           = data.name
           let country            = data.sys.country
           document.querySelector('#location').innerText = location;
           document.querySelector('#country').innerText = country;
           document.querySelector('#temp').innerText = tempCelsius.toFixed(0);
           document.querySelector('#description').innerText = weatherDescription;
           document.querySelector('#humidity').innerText = humidity;
          //  document.querySelector('#humidity').appendChild('em')
          //  document.querySelector('#description').innerText = descriptionType;
          // let humidSelector = document.querySelector('#humidity')
 
           let icon = document.createElement('em')
          //  document.querySelector('#humidity').appendChild(icon).classList.add('wi-humidity')
           icon.classList.add('wi')

          switch(weatherDescription){
            case 'clear sky':
              document.querySelector('body').classList.add('clearskies');
              document.querySelector('#description').appendChild(icon).classList.add('wi-day-sunny')
              break;
            case 'few clouds':
              document.querySelector('body').classList.add('few-clouds');
              document.querySelector('#description').appendChild(icon).classList.add('wi-cloud')
              break;
            case 'few clouds':
              document.querySelector('body').classList.add('skattered-clouds');
              icon.classList.add('wi-cloudy')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'broken clouds':
              document.querySelector('body').classList.add('skattered-clouds');
              icon.classList.add('wi-cloudy')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'shower rain':
              document.querySelector('body').classList.add('shower-rain');
              icon.classList.add('wi-showers')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'rain':
              document.querySelector('body').classList.add('rain');
              icon.classList.add('wi-rain')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'thunderstorm with light rain':
            case 'thunderstorm':
              document.querySelector('body').classList.add('thunderstorm');
              icon.classList.add('wi-thunderstorm')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'snow':
              document.querySelector('body').classList.add('snow');
              icon.classList.add('wi-snow')      
              document.querySelector('#description').appendChild(icon)
              break;  
            case 'mist':
              document.querySelector('body').classList.add('mist');
              icon.classList.add('wi-fog')      
              document.querySelector('#description').appendChild(icon)
              break;  
            default:
              document.querySelector('#description').innerText = 'Not defined'
          }


      
         })
         .catch(err => {
             console.log(`error ${err}`)
         });

});
  
  
