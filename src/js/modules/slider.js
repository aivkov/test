import '../libs/jquery-ui.min';
import '../libs/jquery.ui.touch-punch.min';
import {$document} from "../constants";

$(function(){
    const slider = $('#slider');
    let minValue = Number(slider.attr('data-min-value'));
    let maxValue = Number(slider.attr('data-max-value'));
    let minCurrentValue = Number(slider.attr('data-min-current-value') || slider.attr('data-min-value'));
    let maxCurrentValue = Number(slider.attr('data-max-current-value') || slider.attr('data-max-value'));
    slider.slider({
        range: true,
        min: minValue,
        max: maxValue,
        values: [minCurrentValue, maxCurrentValue],
        slide: function(event, ui) {
            $('.slider-range__input-min').val(ui.values[0]).trigger('keyup');
            $('.slider-range__input-max').val(ui.values[1]).trigger('keyup');
        }
    });
});


$document.on('change', '.slider-range__input-min', function() {
    var valMin = $(this).val();
    var valMax = $('.slider-range__input-max').val();
    if(valMin > valMax) valMin = valMax;
    $('#slider').slider('values', 0, valMin);
});

$document.on('change', '.slider-range__input-max', function() {
    var valMax = $(this).val();
    var valMin = $('.slider-range__input-min').val();
    if(valMax < valMin) valMax = valMin;
    $('#slider').slider('values', 1, valMax);
});