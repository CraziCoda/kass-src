/* var button = document.querySelector('.button');
var navigation = document.querySelector('.navigation');
var blur = document.querySelector('.backdrop');

button.addEventListener('click', rotate);

let isActive = false;

function rotate(event) {
    if (!boolean) {
        button.classList.add('active');
        navigation.style.transform = 'translateX(-40%)';
        navigation
        blur.style.opacity = '1';
        blur.addEventListener('click', backagain);
        isActive = true;
    } else {
        button.classList.remove('active');
        navigation.style.transform = 'translateX(-100%)';
        navigation.style.transition = '300ms linear';
        blur.style.opacity = '0';
        isActive = false;
    }
}

function backagain(event){
    button.classList.remove('active');
    navigation.style.transform = 'translateX(-100%)';
    boolean = false;
    blur.style.opacity = '0';
} */


const menu = document.querySelector('.navigation');
const button = document.querySelector('.button');

button.addEventListener('click', showMenu);

let menuIsActive = false;
function showMenu(){
    switch(menuIsActive){
        case false:
            menuIsActive = true;
            break;
        case true:
            menuIsActive = false;
    }
    call();
}

function call(){
    if(menuIsActive){
        menu.style.transition = '300ms linear';
        menu.style.opacity = "1";
        
    }else{
        menu.style.transition = '300ms linear';
        menu.style.opacity = "0";
    }
}



