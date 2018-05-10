/*! Built with http://stenciljs.com */
const { h } = window.duiba;

class OperationList {
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
    static get style() { return ".operation-list[data-operation-list] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n\n  -webkit-box-pack: center;\n\n  -webkit-justify-content: center;\n\n  -ms-flex-pack: center;\n\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.operation-item[data-operation-list] {\n  padding: 0.1rem 0;\n  width: 4rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n\n  border-bottom: 0.005rem solid #efefef;\n}\n\n.operation-section[data-operation-list] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.operation-item-cover[data-operation-list] {\n  width: 1.2rem;\n  height: 0.91rem;\n}\n\n.operation-item-title[data-operation-list] {\n  margin: 0.1rem;\n\n  font-size: 0.16rem;\n  color: #1a1a1a;\n  line-height: 0.24rem;\n}\n.operation-item-by[data-operation-list] {\n  margin: 0.1rem;\n  font-size: 0.12rem;\n  color: #999999;\n}"; }
}

export { OperationList };
