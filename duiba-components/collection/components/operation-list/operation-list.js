export class OperationList {
    constructor() {
        this.list = [];
    }
    render() {
        return (h("div", { class: "operation-list" }, this.list.map(item => (h("div", { class: "operation-item" },
            h("img", { class: "operation-item-cover", src: item.imgUrl }),
            h("div", { class: "operation-section" },
                h("div", { class: "operation-item-title" }, item.title),
                h("div", { class: "operation-item-by" }, item.by)))))));
    }
    static get is() { return "operation-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "list": {
            "type": "Any",
            "attr": "list"
        }
    }; }
    static get style() { return "/**style-placeholder:operation-list:**/"; }
}
