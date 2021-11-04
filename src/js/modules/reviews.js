import {$document, $window} from '../constants';

const showReviewFormBtn = $('.reviews__add-btn');
const reviewForm = $('.reviews__add-form');

$window.resize(showHideShowMoreReviewBtnLink);
$window.on('load', showHideShowMoreReviewBtnLink);
$document.on('click', '.tabs-box-2__item--review', showHideShowMoreReviewBtnLink);

$document.on('click', '.review__more-link', function(e) {
    e.preventDefault();
    const $this = $(this);
    const $parent = $this.closest('.review');
    const buttonText = $parent.find('.review__more-link');
    const $title = $parent.find('.review__name');
    const $text = $parent.find('.review__text');
    const isActive = $parent.hasClass('is-opened');

    if (isActive) {
        var itemTop = $title.offset().top - 20;
        if(itemTop < $document.scrollTop()) {
            $('html, body').animate({scrollTop : itemTop}, '30');
        }

        $text.css('max-height', '');
        $parent.removeClass('is-opened');

    } else {
        $text.css('max-height', $text[0].scrollHeight);
        $parent.addClass('is-opened');
    }
});

function showHideShowMoreReviewBtnLink() {
    $('.review').each(function() {
        const $this = $(this);
        const $text = $this.find('.review__text');
        var maxTextHeight = $text.css('maxHeight').replace(/[^+\d]/g, '');
        if ($text[0].scrollHeight <= maxTextHeight) {
            $this.addClass('is-expanded');
        } else {
            $this.removeClass('is-expanded');
        }
    });
}

$document.on('click', '.reviews__add-btn', function() {
    if(showReviewFormBtn.hasClass('is-active')) {
        reviewForm.stop().slideUp(300);
        showReviewFormBtn.removeClass('is-active');
        showReviewFormBtn.text('Оставить отзыв');
    }
    else {
        showReviewFormBtn.addClass('is-active');
        reviewForm.stop().slideDown(300);
        showReviewFormBtn.text('Скрыть форму');
    }

});