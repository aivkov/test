import {$document} from '../constants';

$document.on('click', '.orders__show-more', function(e) {
    e.preventDefault();
    const $this = $(this);
    const $parent = $this.closest('.orders__item');
    const $body = $parent.find('.orders__body');
    if ($this.hasClass('is-active')) {
        $body.slideUp();
        $this.removeClass('is-active');
    } else {
        $body.slideDown();
        $this.addClass('is-active');
    }
});