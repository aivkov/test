var currentScrollTop = $(window).scrollTop();
$(window).scroll(function(event){
    const header = $('.header');
    var headerHeight = header.height();
    var scrollTop = $(this).scrollTop();
    var delta = scrollTop - currentScrollTop;
    var currentHeaderTop = Number(header.css('top').replace('px', ''));
    var top = currentHeaderTop - delta;
    if (top > 0) {
        top = 0
    }
    if (top < headerHeight * ( - 1)) {
        top = headerHeight * ( - 1);
    }

    if(delta > 0) {
        if(currentHeaderTop * (-1) < headerHeight) {
            header.css('top',  String(top) + 'px');
        }
    } else {
        if(currentHeaderTop < 0) {
            header.css('top',  String(top) + 'px');
        }
    }
    currentScrollTop = scrollTop;
});