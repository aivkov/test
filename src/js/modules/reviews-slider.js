import Swiper from "swiper";

var swiper = new Swiper('.reviews-slider__swiper-container', {
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: '.reviews-slider__nav-next',
        prevEl: '.reviews-slider__nav-prev',
    },
});