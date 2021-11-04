import {$body, $document} from "../constants";

$document.on('click', '.catalog-item__prop-desc--size ', function(e) {
   e.preventDefault();
   const itemParent = $(this).parents('.catalog-item');
   const sizesParent = $(this).parents('.catalog-item__prop--sizes');
   const cartBtn = itemParent.find('.catalog-item__cart');
   let price = $(this).attr('data-offer-price');
   let offerID = $(this).attr('data-offer-id');
   sizesParent.find('.catalog-item__prop-desc--size').removeClass('is-active');
   $(this).addClass('is-active');
   itemParent.find('.catalog-item__price-sum').text(price);
   cartBtn.attr('data-offer-price', price).data('offer-price', price);
   cartBtn.attr('data-offer-id', offerID).data('offer-id', offerID);
});

$document.on('click', '.catalog-item__select-link--color', function(e) {
   const itemID = $(this).attr('data-tab');
   const colorID = $(this).attr('data-tab-id');
   const sizesBlock = $('[data-tab-block="' + itemID + '"][data-tab-block-id="' + colorID + '"]');
   const activeSize = sizesBlock.find('.catalog-item__prop-desc--size.is-active');
   if(activeSize.length) {
      activeSize.click();
   } else {
      const sizes = sizesBlock.find('.catalog-item__prop-desc--size');
      if(sizes.length) {
         $(sizes[0]).click();
      }
   }
});