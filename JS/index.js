
// Бургер меню-------------
const burgerBtn = document.querySelector('.header-burger__btn img');
const burgerMenu = document.querySelector('.header-burgerMenu');

actObj = {
    actBurg: false,
}

function actBurgMenu(){
    actObj.actBurg = !actObj.actBurg;
    if(actObj.actBurg){
        burgerMenu.classList.toggle('burgActive__disp');
        burgerMenu.classList.toggle('burgActive__top');
    } else {
        setTimeout(()=>{
            burgerMenu.classList.toggle('burgActive__disp');
        },200)
        burgerMenu.classList.toggle('burgActive__top');
    }
}
burgerBtn.addEventListener('click',actBurgMenu)

// ---------------------

// Слайдер
const slidBtn = document.querySelectorAll('.slider-btn');
const slidLine = document.querySelector('.slider-items');
const slidRadios = document.querySelector('.controlls-form');

const slidCont = document.querySelector('.slider-controlls');
const slidContBtn = document.querySelectorAll('.cont');
const slidContRad = slidCont.children[1];
console.log(slidContRad);


let slidWid = slidLine.children[0].clientWidth;

let actImg = 0;
let fImg = 0;
let lImg = 5;

function lefRigImages(){
    slidLine.children[actImg].classList.remove('slider-left','slider-right')
    if(actImg === fImg){
        slidLine.children[actImg+1].classList.add('slider-right');
    } else if (actImg === lImg) {
        slidLine.children[actImg-1].classList.add('slider-left');
    } else {
        slidLine.children[actImg-1].classList.add('slider-left');
        slidLine.children[actImg+1].classList.add('slider-right');
    }
}

lefRigImages();

function newWid(){
    slidWid = slidLine.children[0].clientWidth;
}

function slidRadio(){
    for(let i = 0;i < 6;i++){
        if(slidRadios.children[i].checked){
            actImg = i;
            slider();
        }
    }
}
function slidRadio2(){
    for(let i = 0;i < 6;i++){
        if(slidContRad.children[i].checked){
            actImg = i;
            slider();
        }
    }
}

function slideRight(){
    ++actImg;
    if(actImg > 5) --actImg;
    slider();
}
function slideLeft(){
    console.log(1)
    --actImg;
    if(actImg < 0) ++actImg;
    slider();
}

function slider(){
    newWid();
    slidLine.style.left = `-${actImg*slidWid+(actImg*140)}px`;
    slidRadios.children[actImg].checked = true;
    slidContRad.children[actImg].checked = true;
    lefRigImages();
}

slidBtn[0].addEventListener('click',slideLeft);
slidBtn[1].addEventListener('click',slideRight);
slidContBtn[0].addEventListener('click',slideLeft);
slidContBtn[1].addEventListener('click',slideRight);
slidRadios.addEventListener('click',slidRadio);
slidContRad.addEventListener('click',slidRadio2);


