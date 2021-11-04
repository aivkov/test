import {$document} from '../constants';

export default function counterInit() {
    $document.on('click', '[data-counter-btn]', function(e) {
        const $this = $(this),
            parent = $this.closest('[data-counter]'),
            input = parent.find('[data-counter-input]');

        let i = parseInt(input.val()) + parseInt($(this).data('counter-btn'));
        input.val(i).trigger('change');
    });

    $document.on('change', '[data-counter-input]', function() {
        const $this = $(this),
            parent = $this.closest('[data-counter]'),
            input = parent.find('[data-counter-input]'),
            val = parseInt($this.val()),
            min = parseInt($this.data('counter-min')),
            max = parseInt($this.data('counter-max')),
            trueMin = Number.isInteger(min) ? min : 0,
            trueMax = Number.isInteger(max) ? max : Infinity,
            trueVal = Math.min(Math.max(val, trueMin), trueMax);

        input.val(trueVal);
        toggleSubmitBtn();
    });

    $document.on('change', '.counter__input--all', function() {
        let all = Number($(this).val());
        const $this = $(this),
            parent = $this.closest('.sizes-counters'),
            sizesCounters = parent.find('.sizes-counters__list'),
            input = sizesCounters.find('[data-counter-input]');

            var vals = new Array;
            input.each(function() {
                vals.push(Number($(this).val()));
            });

            var minVals = getMinOfArray(vals);

            input.each(function() {
                var currentVal = $(this).val();
                $(this).val(currentVal - minVals + all);
            });

        toggleSubmitBtn();
    });

    $document.on('change', '.counter__input--size', function() {
        var arQuantity = [];
        let sizes = $(this).parents('.sizes-counters__list').find('.counter__input--size');
        sizes.each(function(key, item) {
            arQuantity[key] = Number($(item).val());
        });

        let minQuantity = Math.min.apply( Math, arQuantity );
        $(this).parents('.sizes-counters').find('.counter__input--all').val(minQuantity);
    });

    function toggleSubmitBtn() {
        const form =$('.catalog-detail__form');
        if(form.length) {
            var countSizes = 0;
            const countersList = form.find('.sizes-counters__list'),
                inputs = countersList.find('.counter__input--size'),
                formSubmitBtn = $('.catalog-detail__actions .catalog-detail__cart-btn');
            if(formSubmitBtn.length) {
                inputs.each(function(key, el) {
                    countSizes += Number($(el).val());
                });
                if(countSizes) {
                    formSubmitBtn.prop('disabled', false);
                } else {
                    formSubmitBtn.prop('disabled', true);
                }
            }

        }
    }

    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }

}
