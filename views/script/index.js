const menu = document.querySelector('.navigation');
const button = document.querySelector('.button');
const main = document.querySelector('.main')

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

function call( event ){
    if(menuIsActive){
        menu.style.transition = '300ms linear';
        menu.style.transform = 'translateX(0)';
        button.classList.add('active');
        main.addEventListener('click', event => {
            menu.style.transition = '300ms linear';
            menu.style.transform = 'translateX(-100%)';
            //bars.classList.remove('active');
            menuIsActive = false;
        })
        
    }else{
        menu.style.transition = '300ms linear';
        menu.style.transform = 'translateX(-100%)';
        //bars.classList.remove('active');
        button.classList.remove('active');
    }
}



