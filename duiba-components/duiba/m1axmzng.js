/*! Built with http://stenciljs.com */
const{h:l}=window.duiba;class t{render(){return void 0===this.collapsed&&(this.collapsed=this.defaultCollapsed),l("div",{class:`collapse arrow-${this.collapsed?"down":"up"}`,onClick:()=>{this.collapsed=!this.collapsed,this.onClick&&this.onClick(this.collapsed)}})}static get is(){return"duiba-collapse"}static get encapsulation(){return"shadow"}static get properties(){return{collapsed:{state:!0},defaultCollapsed:{type:"Any",attr:"default-collapsed"},onClick:{type:"Any",attr:"on-click"}}}static get style(){return".collapse{font-size:14px;width:35px;height:35px;background-size:12px 7px;background-position:center center;background-repeat:no-repeat}.arrow-down{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC)}.arrow-up{-webkit-transform:rotate(180deg);transform:rotate(180deg);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAPFBMVEUAAACZmZmampqampqbm5ucnJybm5umpqaampqampqampqampqampqbm5ubm5ubm5ubm5ubm5ubm5uampqe9LvmAAAAFHRSTlMA/O7UQh8WDdzIvK+idmlaTTUrkOot6sUAAABGSURBVAjXRU5JEsAwCAJNuu/9/1/bjEnwwiAKIHmGZndkm4bOD77AYz5WfnIrcNscm4trCImLQFIc6vm3KuayZ4SpQKvzAYAdAZauvi5pAAAAAElFTkSuQmCC)}"}}export{t as DuibaCollapse};