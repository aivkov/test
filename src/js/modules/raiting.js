import $ from 'jquery';

$(document).on('mouseenter', '.form__field-raiting .raiting:not(.disabled) .raiting__item', function () {
    const raiting = Number($(this).attr('data-raiting'));
    const stars = $(this).siblings('.raiting__item');
    stars.each(function() {
       if (Number($(this).attr('data-raiting')) < raiting) {
           $(this).addClass('is-active');
       } else {
           $(this).removeClass('is-active');
       }

    });

    $(this).addClass('is-active');
});

$(document).on('mouseleave', '.form__field-raiting .raiting:not(.disabled) .raiting__item', function () {
    $(this).removeClass('is-active');
    const stars = $(this).siblings('.raiting__item');
    stars.removeClass('is-active');
});

$(document).on('click', '.form__field-raiting .raiting:not(.disabled) .raiting__item', function () {
    const parent = $(this).parents('.form__field-raiting');
    const input = parent.find('input[name=raiting]');
    const raiting = Number($(this).attr('data-raiting'));
    input.val(raiting);
    parent.find('.raiting').addClass('disabled');
    parent.find('.raiting__message').show();

});