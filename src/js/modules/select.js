export default class Select {
    constructor(el, obj) {
        const defaultOpts = {
            head: '[data-select-head]',
            body: '[data-select-body]',
            title: '[data-select-title]',
            items: '[data-select-item]',
            links: '[data-select-item] a',
            input: null,
            changeHead: true,
            closeOnSelect: true,
            afterSelect: null
        };

        this.options = Object.assign({}, defaultOpts, obj);

        this.dom = {el: $(el)};
        this.dom.head = this.dom.el.find(this.options.head);
        this.dom.body = this.dom.el.find(this.options.body);
        this.dom.title = this.dom.el.find(this.options.title);
        this.dom.items = this.dom.el.find(this.options.items);
        this.dom.input = this.dom.el.find(this.options.input);
        this.dom.links = this.dom.el.find(this.options.links);
        this.defaultValue = this.dom.title.text();
        this.activeClass = 'is-active';

        this.setEvents();

        this.dom.el.attr('data-select-init', true);
    }
    setEvents() {
        this.dom.head.on('click', this.toggle.bind(this));
        this.dom.items.on('click', e => {
            const $this = $(e.target),
                isActive = $this.hasClass('active'),
                text = isActive ? this.defaultValue : $this.text();
            this.changeActive($this);
            if (this.options.changeHead) this.changeHead(text);
            if (this.dom.input.length) this.changeInput(text);
            if (this.options.closeOnSelect) this.close();
            if (this.options.afterSelect) this.options.afterSelect(this);
        });

        $(document).mouseup((e) => {
            if (!this.dom.el[0].contains(e.target)) {
                this.close();
            }
        });
    }
    open() {
        this.dom.el.addClass(this.activeClass);
    }
    close() {
        this.dom.el.removeClass(this.activeClass);
    }
    toggle() {
        if (this.dom.el.hasClass(this.activeClass)) {
            this.close();
        } else {
            this.open();
        }
    }
    changeHead(text) {
        this.dom.title.text(text);
    }
    changeInput(text) {
        this.dom.input.val(text);
    }
    changeActive(el) {
        const isActive = el.hasClass('active');
        this.dom.items.removeClass('active');
        this.dom.links.removeClass('active');

        if (!isActive) {
            el.addClass('active');
        }
    }
}

export function selectsInit() {

    $('[data-select="filter"]:not([data-select-init=true])').each(function() {
        new Select(this, {
            changeHead: true,
            closeOnSelect: true,
        });
    });

}
