import $ from 'jquery';
//import {lockScroll, unlockScroll} from "./scroll-lock";
import {createElement} from "./utils";
import {isLocalhost, $document} from "../constants";
import {addPhoneMask} from "./phone-mask";

class Modal {
    constructor() {
        this.modalSelector = '[data-modal]';
        this.body = $('body');
        this.doc = $(document);
        this.closeTimeout = 300;
        this.activeClass = 'is-active';
        this.loadingClass = 'modal-loading';
    }

    isOtherOpen() {
        return $(this.modalSelector).filter(`.${this.activeClass}`).length;
    }

    open (id, params=false) {
        const $modal = $(`[data-modal=${id}]`);

        //lockScroll();

        $modal.addClass(this.activeClass).focus();
        this.body.addClass('modal-open');
        this.doc.trigger('modal-open', [id]);
    }

    openWithAjax (id, params) {

        const isModalExist = $(`[data-modal=${id}]`).length;

        if (isModalExist) {
            this.open(id, params);
            return;
        }

        var formData = new FormData();
        for (var key in params) {
            formData.append(key, params[key])
        }
        formData.append('action', 'LoadBlocks/getModal');

        const ajaxUrl = '/local/ajax/';
        const ajaxMethod = 'post';

        $.ajax({
            url: ajaxUrl,
            method: ajaxMethod,
            dataType: "json",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: () => {
                this.showLoader();
            },
            success: (data) => {
                const dataHtml = createElement(data.HTML);
                document.body.insertAdjacentElement('beforeend', dataHtml);
                this.onModalLoaded(dataHtml);
                this.open(id);
                addPhoneMask();
            },
            error: () => {
                this.showError();
            },
            complete: () => {
                this.hideLoader();
            }
        });

    }

    close(id) {
        const $modal = $(`[data-modal=${id}]`),
            dataOnClose = $modal.data('modal-onclose');

        if (id) {
            $modal.removeClass(this.activeClass);
        } else {
            $('[data-modal]').removeClass(this.activeClass);
        }

        if (!this.isOtherOpen()) {
            setTimeout(() => {
               // unlockScroll();
                this.body.removeClass('modal-open');

                if (dataOnClose === 'remove') {
                    $modal.remove();
                }
            }, this.closeTimeout);
        }

        this.doc.trigger('modal-close', [id]);
    }

    toggle(id) {
        const $modal = $(`[data-modal=${id}]`);
        const isActive = $modal.hasClass(this.activeClass);
        if (isActive) {
            this.close(id);
        } else {
            this.open(id);
        }
    }

    showLoader() {
        let $loader = $(`.modal-loader`);

        if (!$loader.length) {
            $loader = $(`<div class="modal-loader" />`);
            this.body.append($loader);
        }

        this.body.addClass(this.loadingClass);
    }

    hideLoader() {
        this.body.removeClass(this.loadingClass);
    }

    showError() {
        let $errorModal = $(`[data-modal="modal-error"]`);

        if (!$errorModal.length) {
            $errorModal = $(`<div class="modal" data-modal="modal-error"><div class="modal__error">Произошла ошибка</div></div>`);
            this.body.append($errorModal);
        }

        this.open('modal-error');
    }

    onModalLoaded(dataHtml) {}
}

const modal = new Modal();

export const modalsInit = () => {
    const $document = $(document);

    $document.on('click', '[data-modal-open]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-open'),
            params = $this.data();

        modal.open(modalId, params);
    });

    $document.on('click', '[data-modal-ajax-open]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-ajax-open'),
            params = $this.data();

        modal.openWithAjax(modalId, params);
    });

    $document.on('click', '[data-modal-close]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-close');
        modal.close(modalId);
    });

    $document.on('click', '[data-modal]', function (e) {
        if ($(e.target).closest('[data-modal-inner]').length) return;
        e.preventDefault();
        const modalId = $(e.currentTarget).data('modal');
        modal.close(modalId);
    });
}

modalsInit();

export {
    modal
};
