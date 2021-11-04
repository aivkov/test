function toggleCatalogItemNarrowClass() {
    const catalogItem = $('.catalog-item');
    catalogItem.each(function() {
        const narrowClass = 'catalog-item--narrow';
        if($(this).width() > 300) {
            $(this).removeClass(narrowClass);
        } else {
            $(this).addClass(narrowClass);
        }
    })
}

window.addEventListener('resize', toggleCatalogItemNarrowClass);

toggleCatalogItemNarrowClass();