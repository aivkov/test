import Swiper from "swiper";

const sliders = document.querySelectorAll('.items-slider');

sliders.forEach(sliderWrapper => {
    const slider = sliderWrapper.querySelector('.items-slider__swiper-container');
    const arrowPrev = sliderWrapper.querySelector('.items-slider__nav--prev');
    const arrowNext = sliderWrapper.querySelector('.items-slider__nav--next');

    new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        lazy: true,
        breakpoints: {
            /* 1640: {
               slidesPerView: 5,
               spaceBetween: 20
           },
           1320: {
               slidesPerView: 4,
               spaceBetween: 15
           },
           1023: {
               slidesPerView: 3,
               spaceBetween: 15
           },
       /*    575:              slidesPerView: 2,
               spaceBetween: 10
           },
           449: {
               slidesPerView: 1,
               spaceBetween: 10
           }*/
        },
        navigation: {
            nextEl: arrowNext,
            prevEl: arrowPrev,
        },

    });
});

/*
var swiper = new Swiper('.items-slider__swiper-container', {
    slidesPerView: 1,
    loop: false,
    breakpoints: {
        1640: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        449: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: '.items-slider__nav--next',
        prevEl: '.items-slider__nav--prev',
    },

});*/
