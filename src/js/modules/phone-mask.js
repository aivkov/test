import {$document} from "../constants";

$.fn.setCursorPosition = function(pos) {

    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$document.on('click', '[data-input-phone]', function(){
    if($(this).val() == '+7(___) ___-__-__')
        $(this).setCursorPosition(3);
});


export function addPhoneMask() {
    $.mask.definitions['9'] = '';
    $.mask.definitions['d'] = '[0-9]';
    $('[data-input-phone]').mask("+7(ddd) ddd-dd-dd");
}