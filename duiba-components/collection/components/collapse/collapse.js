export class Collapse {
    render() {
        const collapsed = this.collapsed === undefined ? this.defaultCollapsed : this.collapsed;
        return (h("div", { class: `collapse arrow-${collapsed ? "down" : "up"}`, onClick: () => {
                this.onClick && this.onClick(!!!collapsed);
            } }));
    }
    static get is() { return "duiba-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "collapsed": {
            "type": "Any",
            "attr": "collapsed"
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
