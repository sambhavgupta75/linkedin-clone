const profilButton = document.getElementById('profil_button');
const menuProfil = document.getElementById('menu_profil');
const lineDiv = document.getElementById('center_line');
const menuLine = document.querySelector(".line_menu_toggle");
const headerBar = document.getElementById('toggle_my_header'); 
const header = document.querySelector('header');
const body = document.body;
const theInput = document.querySelector('.search_bar_input');

let theBlur = false;

const blurEffect = document.querySelector('.effect_blur')
let myVar =  true;

profilButton.addEventListener('click', ()=>{
    menuProfil.classList.toggle('menu_toggle');
});

window.addEventListener('scroll', () =>{

    if( window.scrollY > 200){
            headerBar.style.display = "block";
            myVar ==false;
    }
    else
        headerBar.style.display = "none";
        myVar =  true;
  
});
if( myVar){
    headerBar.style.display ="none";
}


theInput.onfocus = function(){
    blurEffect.classList.toggle('blur_appear')
    theBlur == true;

    if(theBlur == true){
        header.addEventListener('click', () =>{
            blurEffect.classList.toggle('blur_none')
        })
    }
}
