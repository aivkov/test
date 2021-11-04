import {$document, $window} from '../constants';
const activeClass = 'is-active';

export default function init() {
    $('.tabs').each(function() {
        const $this = $(this);
        const $activeItem = $this.find('.tabs-list a.is-active');
        changeActive($activeItem);
    });

    $document.off('click.tabsBox');
    $document.on('click.tabsBox', '.tabs-head', function() {
        $(this).closest('.tabs-box').toggleClass(activeClass);
    });
}

function changeActive($newActiveItem) {
    const $parent = $newActiveItem.closest('.tabs');
    const $activeLine = $parent.find('.tabs__active-line');
    const $head = $parent.find('.tabs__head-title');

    if (!$activeLine.length || !$newActiveItem.length) return;
    $activeLine.css({
        width: $newActiveItem.innerWidth(),
        left: $newActiveItem.offset().left - $parent.offset().left
    });

    $head.text($newActiveItem.text());
    $parent.removeClass(activeClass);
}

$('.tabs').on('changeTab', function(e, tabsName, id) {
    const $activeItem = $(`[data-tab=${tabsName}][data-tab-id=${id}]`);
    changeActive($activeItem);
});


$window.on('resize', () => {
    init();
});
