window.addEventListener('load',()=>{
    // const serverName = "http://127.0.0.1:5500/ice/temples/"
    const requestURL = "/lesson12/js/temples2.json"
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple])=>{
                buildTempleCard(temple);
            });
        });
});
function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("div");
    card.classList.add("temple");
    card.innerHTML = `<img src="${temple.imageurl}" alt="${temple.name}">
                      <h2>${temple.name}</h2>
                      <p>Address: ${temple.address1}</p>
                      <p>Phone: ${temple.phone}</p>
                      <p>Email: ${temple.email}</p>
                      <p>Services: ${temple.services}</p>
                      <p>History: ${temple.history}</p>
                      <p>Ordinance Schedule: ${temple.schedule}</p>
                      <p>Availablity/Closure: ${temple.closure}</p>`;
    document.querySelector("#home-temples2").appendChild(card);
}