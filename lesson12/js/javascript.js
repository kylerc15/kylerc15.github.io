window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.hamButton');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);

});