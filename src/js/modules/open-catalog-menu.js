$(document).on('click', '.header__catalog-open', function() {
    if($(this).hasClass('is-open')) {
        closeCatalogMenu();
    } else {
        openCatalogMenu();
    }
});

$('.header-catalog').mouseleave(closeCatalogMenu);

function openCatalogMenu () {
    $('.header-catalog, .header__catalog-open').addClass('is-open');
    $('.header__catalog-open-btn').addClass('is-active');
}

function closeCatalogMenu () {
    $('.header-catalog, .header__catalog-open').removeClass('is-open');
    $('.header__catalog-open-btn').removeClass('is-active');
}