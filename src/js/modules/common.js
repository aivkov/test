import {$document, $window} from '../constants';

//policy
$document.on('change', '[data-form-policy]', function() {
    let $this = $(this),
        p = $this.closest('form'),
        b = p.find('button[type=submit], [data-submit]');

    if($this.prop('checked')) {
        b.prop('disabled', false);
        b.removeClass('disabled');
    }
    else {
        b.prop('disabled', true);
        b.addClass('disabled');
    }
});