navigator.geolocation.getCurrentPosition((position) => {
    
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    
    const MY_KEY = '9c8c7922e9fd5eb703a4d593c73decc1';
       
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_KEY}` 
    
       fetch(url)
         .then(res => res.json()) // parse response as JSON
         .then(data => {
           console.log(data)
           let tempCelsius = data.main.temp - 273.15
           let weatherDescription = data.weather[0].description 
           let descriptionType = data.weather[0].main 
           let location    = data.name
           let country     = data.sys.country
           document.querySelector('#location').innerText = location;
           document.querySelector('#country').innerText = country;
           document.querySelector('#temp').innerText = tempCelsius.toFixed(0);
           document.querySelector('#description').innerText = weatherDescription;
           document.querySelector('#description-type').innerText = descriptionType;

        //    let icon = document.createElement('span')
        //    document.querySelector('#description-type').appendChild(icon);

           if(descriptionType == "Clouds"){
            document.querySelector('.wi').setAttribute('class','wi-cloudy');
            // icon
            

           }

           console.log(weatherDescription)
         })
         .catch(err => {
             console.log(`error ${err}`)
         });

});
  
  
