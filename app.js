'use strict';

/*Создание слайдера*/

const slider = document.querySelector('.testimonials__carusel');
const sliderItems = Array.from(slider.children);
const arrows = Array.from(document.querySelectorAll('.testimonials__arrow'));

arrows.forEach(arrow => arrow.addEventListener('click', function (event) {
    event.preventDefault();

    let activeItem = slider.querySelector('.active');

    if (event.target.closest('.arrow__left')) {
        if (sliderItems.indexOf(activeItem) == 0) { 
            sliderItems.at(-1).classList.add('active');
        } else {
            sliderItems[sliderItems.indexOf(activeItem) - 1].classList.add('active');
        }
    }else {
        if (sliderItems.indexOf(activeItem) == sliderItems.length - 1) { 
            sliderItems[0].classList.add('active');
        } else {
            sliderItems[sliderItems.indexOf(activeItem) + 1].classList.add('active');
        }
    }

    activeItem.classList.remove('active');
    sliderItems.forEach(item => item.style.translate = `-${100 * sliderItems.indexOf(slider.querySelector('.active'))}%`);
}));

/*Создание бургера*/

const burgerBtn = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.navigation__close');
const burger = document.querySelector('.navigation');

burgerBtn.addEventListener("click", function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
    } else {
        burger.classList.add('active');
    }

});closeBtn.addEventListener("click", function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
    } else {
        burger.classList.add('active');
    }
});
