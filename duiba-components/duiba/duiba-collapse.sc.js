/*! Built with http://stenciljs.com */
const { h } = window.duiba;

class Collapse {
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
    static get style() { return ".collapse[data-duiba-collapse] {\n    font-size: 14px;\n    width: 35px;\n    height: 35px;\n    background-size: 12px 7px;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.arrow-down[data-duiba-collapse] {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC\");\n}\n\n.arrow-up[data-duiba-collapse] {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC\");\n}"; }
}

export { Collapse as DuibaCollapse };
