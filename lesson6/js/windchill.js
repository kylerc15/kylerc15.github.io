window.addEventListener('load', ()=>{

    const requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4bc5043b865ab98443e7950c385bf8e1&units=imperial';

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
    
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        const main = jsonObject['main'];

        const temp = main.temp_max;

        const wind = jsonObject['wind'];
        const wSpeed = wind.speed;

        // console.log(temp);
        // console.log(wSpeed);

        if(temp<=50 && wSpeed>3){

            const wChill = 35.74 + (0.6215*temp) - (35.75*(Math.pow(wSpeed,0.16))) + ((0.4275*temp)*(Math.pow(wSpeed,0.16)));
        
            document.getElementById("wChill").innerHTML = Math.round(wChill);
        }
        else {
            document.getElementById("allChill").innerHTML = "N/A";
        }
        });
    
    },);
