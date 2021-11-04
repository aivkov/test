//import lazySizes from 'lazysizes';
import {$document} from "../constants";

$document.on('lazyloaded', function(e){
    const el = $(e.target),
        parent = el.closest('.isLoading');
    parent.removeClass('isLoading');
});

$(function() {
    // у загруженных изображений убрать лоадер
    $('.lazyloaded').closest('.isLoading').removeClass('isLoading');
});

export const showCustomLazyImages = ($images) => {
    const $parent = $images.parent();
    $parent.addClass('isLoading')
    $images.on('load', function() {
        $(this).removeClass('custom-lazyload')
            .parent().removeClass('isLoading');
    });

    $images.each(function() {
       $(this).attr('src', $(this).data('src'));
    });
};
