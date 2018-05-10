/*! Built with http://stenciljs.com */
const { h } = window.duiba;

class OperationList {
    render() {
        return (h("button", { class: "my-button", onClick: this.onClick },
            h("slot", null)));
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "onClick": {
            "type": "Any",
            "attr": "on-click"
        }
    }; }
    static get style() { return ""; }
}

export { OperationList as MyButton };
