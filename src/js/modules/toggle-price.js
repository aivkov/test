$(document).on('click', '.price__section', function(e) {
    const parent0 = $(e.target).parents()[0];
    const parent1 = $(e.target).parents()[1];
    if($(parent0).hasClass('price__section-link') || $(parent1).hasClass('price__section-link')) {
        return;
    }
    if($(this).hasClass('is-active')) {
       $(this).removeClass('is-active');
    } else {
       $(this).addClass('is-active');
    }
});