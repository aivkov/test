import "./modules/jquery-init";
//import isTouch from "./libs/detectTouch";
import './libs/jQuery.Brazzers-Carousel.min';
import './libs/jquery.maskedinput';
import './libs/jquery.fancybox.js';

import {$document, $window, $body} from './constants';

import './modules/common';
import './modules/main-slider';
import './modules/sections-slider';
import './modules/open-catalog-menu';
import './modules/tabs';
import './modules/tabs-box';
import './modules/brazzers';
import './modules/reviews-slider';
import './modules/modal';
import './modules/open-catalog-filter';
import './modules/catalog-detail-slider';
import './modules/items-slider';
import './modules/move-catalog-detail-blocks';
import './modules/slider-range';
import './modules/slider';
import './modules/lazyload';
import './modules/change-catalog-size';
import './modules/toggle-search-mobile';
import './modules/phone-mask';
import './modules/reviews';
import './modules/toggle-order-detail';
import './modules/select-delivery';
import './modules/ajax';
import './modules/raiting';
import './modules/contacts-tabs-slider';
import './modules/main-tabs-slider';
import './modules/toggle-price';
import './modules/scroll-observer';
import './modules/width-observer';

import tabsBoxInit from './modules/tabs-box';
import {modalsInit, modal} from './modules/modal';
import {selectsInit} from './modules/select';
import counterInit from './modules/counter';
import SwiperSlider from "./modules/slider-production";
import {addPhoneMask} from './modules/phone-mask';

import catalogDetailSlider, {addSlider as addCatalogDetailSlider} from './modules/catalog-detail-slider';

import LazyLoad from 'vanilla-lazyload';
import Swiper from "swiper";

window.myLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
});

$window.on('load', function() {
    tabsBoxInit();
    $body.addClass('is-page-loaded');
});



//modalsInit();
selectsInit();
counterInit();
catalogDetailSlider();
addPhoneMask();

// input mask
//$.mask.definitions['h'] = "[0-79]";
//$('[data-input-phone]').mask('+7 (999) 999 99 99');

// fancybox
$().fancybox({
    selector: '[data-fancybox]',
    hash: false,
    closeClickOutside: true,
    infobar: false,
    loop: true,
    buttons: [
        'close'
    ],
    backFocus: false
});

document.querySelectorAll('.about__slider').forEach((el) => {
    const aboutSlider = new SwiperSlider(el, {
        slidesPerView: 'auto',
        watchOverflow: true,
        speed: 200,
    })
});

window.$ = window.jQuery = $;

window.app = {
    addCatalogDetailSlider,
    selectsInit,
    modal
};

document.querySelectorAll('.section-catalog__tabs').forEach((el) => {
    const sliderTab = new SwiperSlider(el)
});


document.querySelectorAll('.catalog-item__img').forEach((el) => {
    const catalogItemSlider = new SwiperSlider(el, {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: el.querySelector('.slider-nav__next'),
            prevEl: el.querySelector('.slider-nav__prev'),
        },
    });
});

document.querySelectorAll('.main-slider').forEach((el) => {
    const mainSlider = new SwiperSlider(el, {
        // spaceBetween: 20,
        slidesPerView: 'auto',
        //centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            //disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
            }
        },
    });
});