const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (i == 1 || 5 || 6){
        
            let city = document.createElement('section');
            
            let h4 = document.createElement('h4');
            h4.textContent = towns[i].name;
            city.appendChild(h4);
            document.querySelector('div.city').appendChild(city);
    
            let h5 = document.createElement('h5');
            h5.textContent = towns[i].motto;
            city.appendChild(h5);
            document.querySelector('div.city').appendChild(city);
    
            let h52 = document.createElement('h5');
            h52.textContent = 'Year Founded: ' + towns[i].yearFounded;
            city.appendChild(h52);
            document.querySelector('div.city').appendChild(city);
    
            let h53 = document.createElement('h5');
            h53.textContent = 'Population: ' + towns[i].currentPopulation;
            city.appendChild(h53);
            document.querySelector('div.city').appendChild(city);
    
            let h54 = document.createElement('h5');
            h54.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            city.appendChild(h54);
            document.querySelector('div.city').appendChild(city);
    
            let image = document.createElement('img');
            image.setAttribute('src', "/lesson9/images/image-" + i + ".jpg");
            image.setAttribute('alt', towns[i].name + ' city image');
            city.appendChild(image);
            document.querySelector('div.city').appendChild(city);
        }
    }

  });