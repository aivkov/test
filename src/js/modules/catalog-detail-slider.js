import Swiper from "swiper";
import 'jquery-zoom';

function addSlider(slider) {

    //var isFastView;
    //isFastView = $(slider).hasClass('catalog-detail__slider--fast-view');
    const swiperDetail = new Swiper(".catalog-detail__slider", {
        slidesPerView: 'auto',
        //watchOverflow: true,
        loop: true,
        loopedSlides: 3,
        initialSlide: 0,
        lazy: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.catalog-detail__nav--next',
            prevEl: '.catalog-detail__nav--prev',
        },
    });
    setTimeout(addZoom, 0);
}

function catalogDetailSliderInit() {
    $('.catalog-detail__slider').each(function() {
        addSlider(this);
    });
}

export default catalogDetailSliderInit;

export {
    addSlider
}

function addZoom() {
    $('[data-zoom]').each(function() {
        const $this = $(this);
        const url = $this.data('zoom');

        $this.zoom({
            url,
            magnify: 1,
            duration: 300,
        });
    });
}
addZoom();
