//import checkIsTouch from "./libs/detectTouch";

export const $document = $(document);
export const $body = $('body');
export const $window = $(window);
/*export const $header = $('.header');
export const isTouch = checkIsTouch();*/

export const Breakpoints = {
    XL: 1640,
    LG: 1320,
    MD: 1023,
    SM: 767,
    XS: 575,
    XXS: 449
};

export const mediaBreakpoints = {
    XL: window.matchMedia(`(max-width: ${Breakpoints.XL}px)`),
    LG: window.matchMedia(`(max-width: ${Breakpoints.LG}px)`),
    MD: window.matchMedia(`(max-width: ${Breakpoints.MD}px)`),
    SM: window.matchMedia(`(max-width: ${Breakpoints.SM}px)`),
    XS: window.matchMedia(`(max-width: ${Breakpoints.XS}px)`),
    XXS: window.matchMedia(`(max-width: ${Breakpoints.XXS}px)`),
};

export const isLocalhost = window.location.hostname === 'localhost';
