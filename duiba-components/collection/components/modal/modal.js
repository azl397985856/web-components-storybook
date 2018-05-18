export class Calendar {
    render() {
        const { onClose, visible, width, height, title, subTitle } = this;
        return (h("div", { class: `modal ${!visible ? "hidden" : ""}` },
            h("div", { class: "modal-content", style: {
                    width,
                    height
                } },
                h("div", { class: "modal-header" },
                    h("div", { class: "modal-title" }, title),
                    h("i", { class: "modal-close", onClick: onClose })),
                h("div", { class: "modal-sub-title" }, subTitle),
                h("div", { class: "modal-body" },
                    h("slot", null)))));
    }
    static get is() { return "duiba-modal"; }
    static get properties() { return {
        "height": {
            "type": String,
            "attr": "height"
        },
        "onClose": {
            "type": "Any",
            "attr": "on-close"
        },
        "subTitle": {
            "type": String,
            "attr": "sub-title"
        },
        "title": {
            "type": String,
            "attr": "title"
        },
        "visible": {
            "type": Boolean,
            "attr": "visible"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:duiba-modal:**/"; }
}
