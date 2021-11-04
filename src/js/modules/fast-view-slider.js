import Swiper from "swiper";
import 'jquery-zoom';

function addSlider(slider) {
    const swiperDetail = new Swiper(".fast-view__slider", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false,
        watchOverflow: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.catalog-detail__nav--next',
            prevEl: '.catalog-detail__nav--prev',
        },
    });

    /*setTimeout(() => {
        $(slider.querySelectorAll('[data-zoom]')).each(function() {
            const $this = $(this);
            const url = $this.data('zoom');

            $this.zoom({
                url,
                magnify: 1,
                duration: 300,
            });
        });
    });*/
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

$('[data-zoom]').each(function() {
    const $this = $(this);
    const url = $this.data('zoom');

    $this.zoom({
        url,
        magnify: 1,
        duration: 300,
    });
});