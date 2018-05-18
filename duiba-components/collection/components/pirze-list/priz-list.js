export class Calendar {
    render() {
        const { list } = this;
        return (h("div", { class: "prize-list" },
            h("div", { class: "prize-wrapper" },
                h("div", { class: "prize-tag" }),
                list.map(item => (h("div", { class: "prize-item" },
                    h("div", { class: "prize-img-box" },
                        h("img", { class: "prize-img", src: item.url })),
                    h("div", { class: "prize-name" }, item.name)))))));
    }
    static get is() { return "prize-list"; }
    static get properties() { return {
        "list": {
            "type": "Any",
            "attr": "list"
        }
    }; }
    static get style() { return "/**style-placeholder:prize-list:**/"; }
}
