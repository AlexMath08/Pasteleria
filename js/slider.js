const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll(".slider__section");
let slidersectionLast = slidersection[slidersection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', slidersectionLast);

function Next() {
    let slidersectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slidersectionFirst)
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let slidersection = document.querySelectorAll(".slider__section");
    let slidersectionLast = slidersection[slidersection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionLast);
        slider.style.marginleft = "-100%";
    }, 500);

}

btnRight.addeventlistener('click', function () {
    Next();
});

btnLeft.addeventlistener('click', function () {
    Prev();
});


setInterval(function(){
    Next();
}, 5000);


