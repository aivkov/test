import '../libs/jquery-ui.min';
import '../libs/jquery.ui.touch-punch.min';

export function rangeInit() {
    $('.slider-range').each(function() {
        var $this = $(this),
            parentForm = $this.closest('form'),
            range = $('.slider-range__range', $this),
            min = $this.data('range-min'),
            max = $this.data('range-max'),
            from = $this.data('range-from'),
            to = $this.data('range-to'),
            inputFrom = $('.slider-range__from', $this),
            inputTo = $('.slider-range__to', $this);

        range.slider({
            range: true,
            min: min,
            max: max,
            values: [from, to],
            animate: 'fast',
            create: function() {
                inputFrom.val($(this).slider('values', 0));
                inputTo.val($(this).slider('values', 1));
            },
            slide: function(e, ui) {
                inputFrom.val(ui.values[0]).trigger('keyup');
                inputTo.val(ui.values[1]).trigger('keyup');
                clearTimeout(window.cadTimer);
                window.cadTimer = setTimeout(function() {
                    // document.getElementById('catalogsmartfilter').submit();
                }, 500);
            }
        });

        range.before('<div class="slider-range__range-bg" />');

        inputFrom.on('change', function() {
            var val = $(this).val();
            range.slider('values', 0, val);
        });

        inputTo.on('change', function() {
            var val = $(this).val();
            range.slider('values', 1, val);
        });

        parentForm.on('reset', function() {
            range.slider('values', 0, min);
            range.slider('values', 1, max);
        });
    });
}
