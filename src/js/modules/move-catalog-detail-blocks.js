import {$window} from "../constants";
$window.resize(moveBlocks);
$window.on('load', moveBlocks);

function moveBlocks() {
    var width = $window.width();
    const head = $('.catalog-detail__head');
    const content = $('.catalog-detail__right');

    const headerCart = $('.header__bottom-right');

    if (head.length && content.length) {
        if (width < 1024) {
            $('.catalog-detail').prepend(head);
            $('.catalog-detail__img').after(content);
        } else {
            $('.catalog-detail__right').prepend(head);
            $('.catalog-detail__left').after(content);
        }
    }

}
