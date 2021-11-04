import Swiper from "swiper";


var swiper = new Swiper('.sections-slider__swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.sections-slider__nav-next',
        prevEl: '.sections-slider__nav-prev',
    },
});

