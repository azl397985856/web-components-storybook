/*! Built with http://stenciljs.com */
duiba.loadBundle("tltsiddj",["exports"],function(e){var n=window.duiba.h,t=function(){function e(){}return e.prototype.render=function(){var e=this,t=void 0===this.collapsed?this.defaultCollapsed:this.collapsed;return n("div",{class:"collapse arrow-"+(t?"down":"up"),onClick:function(){e.onClick&&e.onClick(!t)}})},Object.defineProperty(e,"is",{get:function(){return"duiba-collapse"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{collapsed:{type:"Any",attr:"collapsed"},defaultCollapsed:{type:"Any",attr:"default-collapsed"},onClick:{type:"Any",attr:"on-click"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".collapse[data-duiba-collapse]{font-size:14px;width:35px;height:35px;background-size:12px 7px;background-position:center center;background-repeat:no-repeat}.arrow-down[data-duiba-collapse]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC)}.arrow-up[data-duiba-collapse]{-webkit-transform:rotate(180deg);transform:rotate(180deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC)}"},enumerable:!0,configurable:!0}),e}();e.DuibaCollapse=t,Object.defineProperty(e,"__esModule",{value:!0})});