import {$document} from '../constants';

$document.on('click', '.catalog__show-filter-btn', function() {
    $('.catalog-filter').addClass('is-active');
});

$document.on('click', '.catalog-filter__head-close-btn', function() {
    $('.catalog-filter').removeClass('is-active');
});