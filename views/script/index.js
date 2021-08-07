var button = document.querySelector('.button');
var navigation = document.querySelector('.navigation');
var blur = document.querySelector('.backdrop');

button.addEventListener('click', rotate);

let boolean = false;

function rotate(event) {
    if (!boolean) {
        button.classList.add('active');
        navigation.style.transform = 'translateX(-40%)';
        navigation.style.transition = '300ms linear';
        blur.style.opacity = '1';
        blur.addEventListener('click', backagain);
        boolean = true;
    } else {
        button.classList.remove('active');
        navigation.style.transform = 'translateX(-100%)';
        navigation.style.transition = '300ms linear';
        blur.style.opacity = '0';
        boolean = false;
    }
}

function backagain(event){
    button.classList.remove('active');
    navigation.style.transform = 'translateX(-100%)';
    boolean = false;
    blur.style.opacity = '0';
}