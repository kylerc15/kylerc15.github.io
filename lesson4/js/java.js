window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.hamButton');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);



const today = new Date();
const year = today.getFullYear();
const date = today.getDate();
const day = today.getDay();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[today.getDay()];

const formatDate = `${dayName}, ${date} ${monthName} ${year}`;
document.getElementById('curDate').innerHTML = formatDate.toLocaleString();

    }
,);
