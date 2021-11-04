import {$body, $document} from "../constants";

const activeClass = 'is-active';

export function selectTab(tabsName, id) {
    const $tabButtons = $('[data-tab='+ tabsName +']');
    const $tabBlocks = $('[data-tab-block='+ tabsName +']');
    const $currentButton = $tabButtons.filter('[data-tab-id='+ id +']');
    const $currentBlock = $tabBlocks.filter('[data-tab-block-id='+ id +']');

    $document.trigger('beforeChangeTab', [tabsName, id, $currentButton, $currentBlock]);

    $tabButtons.removeClass(activeClass);
    $currentButton.addClass(activeClass);

    $tabBlocks.removeClass(activeClass);
    $currentBlock.addClass(activeClass);
    $currentButton.trigger('changeTab', [tabsName, id]);
    $document.trigger('changeTab', [tabsName, id, $currentButton, $currentBlock]);

}

$document.on('changeTab', function(e, tabsName, id) {

});

$document.on('click', '[data-tab]', function(e) {
    e.preventDefault();
    const $this = $(this);

    if ($this.hasClass(activeClass)) return;

    const tabsName = $this.data('tab'),
        id = $this.data('tab-id');

    selectTab(tabsName, id);
});
