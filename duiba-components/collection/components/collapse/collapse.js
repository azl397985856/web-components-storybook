export class Collapse {
    render() {
        if (this.collapsed === undefined) {
            this.collapsed = this.defaultCollapsed;
        }
        return (h("div", { class: `collapse arrow-${this.collapsed ? "down" : "up"}`, onClick: () => {
                this.collapsed = !!!this.collapsed;
                this.onClick && this.onClick(this.collapsed);
            } }));
    }
    static get is() { return "duiba-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "collapsed": {
            "state": true
        },
        "defaultCollapsed": {
            "type": "Any",
            "attr": "default-collapsed"
        },
        "onClick": {
            "type": "Any",
            "attr": "on-click"
        }
    }; }
    static get style() { return "/**style-placeholder:duiba-collapse:**/"; }
}
