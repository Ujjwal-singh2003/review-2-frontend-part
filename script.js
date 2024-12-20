/* menu-bar transtion*/

function myFunction(x) {
    x.classList.toggle("change");
    
}


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let formBtn = document.querySelector('#signIn-form');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    formBtn.classList.remove('active');
}
 
