import {$document} from "../constants";

$document.on('click', '.header__search-open', function() {
    const $this = $(this),
        isActive = $this.hasClass('is-active'),
        $searchBlock = $('.search-popup__wrap');
    if (isActive) {
        $searchBlock.stop().slideUp('fast');
        $this.removeClass('is-active');
    } else {
        $searchBlock
            .css('display', 'flex')
            .hide()
            .stop()
            .slideDown('fast');
        $this.addClass('is-active');
    }
});

$document.on('click', '.search-popup__close-btn', function() {
    $('.search-popup__wrap').stop().slideUp('fast');
    $('.header__search-open').removeClass('is-active');
});
