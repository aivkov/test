import Swiper from "swiper";
import 'jquery-zoom';

const swiperTabs = new Swiper(".contacts__tabs-list", {
    //spaceBetween: 10,
    loop: false,
   // / watchOverflow: true,
    /*loopFillGroupWithBlank: true,*/
    slidesPerView: 'auto',
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
