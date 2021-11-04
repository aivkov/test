import {$document} from '../constants';

$document.on('click', '.cart__form-delivery-item', function() {
   const $this = $(this),
       $parent = $this.parents('.cart__form-delivery-body'),
       $items = $parent.find('.cart__form-delivery-item'),
       deliveryId = $this.attr('data-delivery-id'),
       $hidden = $parent.find('.cart__form-delivery-input');
   $items.removeClass('is-active');
   $this.addClass('is-active');
   $hidden.val(deliveryId);
});