window.addEventListener('load', ()=>{

const temp = document.getElementById("temp").innerHTML;
const wSpeed = document.getElementById("wSpeed").innerHTML;

console.log(temp);
console.log(wSpeed);

if(temp<=50 && wSpeed>3){

    const wChill = 35.74 + (0.6215*temp) - (35.75*(Math.pow(wSpeed,0.16))) + ((0.4275*temp)*(Math.pow(wSpeed,0.16)));

    document.getElementById("wChill").innerHTML = Math.round(wChill);
}
else {
    document.getElementById("allChill").innerHTML = "N/A";
}
});
