/*! Built with http://stenciljs.com */
duiba.loadBundle("zgiy2o28",["exports"],function(e){var n,t=window.duiba.h;!function(e){e.Native="native",e.Normal="normal"}(n||(n={}));var a=function(){function e(){}return e.prototype.handleCellClick=function(e){var n=e.monthResignedMap,t=e.monthSignedMap,a=e.date,r=e.signin;n[a]||t[a]||r(a)},e.prototype.render=function(){var e,n=this,a=this,r=a.currentTime,i=a.endTime,o=a.startTime,d=a.showHeader,u=a.calendarType,c=a.monthResignedMap,l=a.monthSignedMap,s=a.todayIndex,m=a.count,p=a.signin;e={startTime:o,endTime:i,currentTime:r,signin:p},Object.keys(e).forEach(function(n){if(null===e[n]||void 0===e[n])throw n+" is required, but got "+e[n]});var g=function(e){var n=e.startTime,t=e.endTime,a=e.currentTime,r=e.calendarType,i=e.todayIndex,o=void 0===i?1:i,d=e.count,u=new Date(+n).getTime(),c=new Date(+t).getTime(),l=new Date(+a).getTime(),s=[];if(!d&&"native"===r)for(var m=new Date(+n).getDay(),p=0;p<m;p++)s.push("");for(p=u;p<=c;p+=864e5)s.push(p);return function(e,n,t,a,r){if("native"===t)return e;if(!a)return e;if(e.length<a)return e;var i=function e(n,t,a){for(var r=0;r<n.length;r++)if(function(e,n){return new Date(e).getFullYear()===new Date(n).getFullYear()}(i=n[r],o=a)&&function(e,n){return new Date(e).getMonth()===new Date(n).getMonth()}(i,o)&&function(e,n){return new Date(e).getDate()===new Date(n).getDate()}(i,o))return r+1!==t?e(n.slice(1),t,a):n;var i,o;return[]}(e,n,r);return i.slice(0,a-i.length)}(s,o,r,d,l)}({startTime:o,endTime:i,currentTime:r,calendarType:u,todayIndex:s,count:m});return t("div",{class:"calendar"},d&&t("div",{class:"calendar-header"},["日","一","二","三","四","五","六"].map(function(e){return t("span",{class:"calendar-header-item"},e)})),t("div",{class:"calendar-body"},g.map(function(e){return t("span",{class:"calendar-body-cell "+function(e){var n=e.date,t=e.monthResignedMap,a=void 0===t?{}:t,r=e.monthSignedMap,i=void 0===r?{}:r,o=[];return new Date(+e.currentTime).getDate()===n&&o.push("today"),a[n]?o.concat("resign").join(" "):i[n]?o.concat("sign").join(" "):o.join("")}({date:new Date(e).getDate(),currentTime:r,monthResignedMap:c,monthSignedMap:l}),onClick:n.handleCellClick.bind(n,{monthResignedMap:c,monthSignedMap:l,date:new Date(e).getDate(),signin:p,currentTime:r})},e&&new Date(e).getDate())})))},Object.defineProperty(e,"is",{get:function(){return"duiba-calendar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{calendarType:{type:String,attr:"calendar-type"},count:{type:Number,attr:"count"},currentTime:{type:"Any",attr:"current-time"},endTime:{type:"Any",attr:"end-time"},monthResignedMap:{type:"Any",attr:"month-resigned-map"},monthSignedMap:{type:"Any",attr:"month-signed-map"},showHeader:{type:"Any",attr:"show-header"},signin:{type:"Any",attr:"signin"},startTime:{type:"Any",attr:"start-time"},todayIndex:{type:Number,attr:"today-index"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".calendar{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px;text-align:center;color:#ababab;width:300px;margin:0 auto;background:#fff;border-radius:6px;border:2px solid #ababab;padding:10px}.calendar-header{text-align:left;width:300px;height:40px}.calendar-body{text-align:left;width:300px}.calendar-header-item{text-align:center;display:inline-block;width:40px;line-height:40px}.calendar-body-cell{text-align:center;display:inline-block;width:40px;line-height:40px}.sign{color:rgba(255,83,83,0);width:30px;height:30px;margin:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAMAAABLXLayAAAAVFBMVEUAAAD2Q0P2RET1RET2RET3RET3RET4RUX1RET2Q0P2Q0P2Q0P2Q0P2Q0P2RET2Rkb5Rkb4Rkb/RET/UFD1Q0P3RET2RET4RUX3Rkb6R0f1RET2Q0OuMIdLAAAAG3RSTlMA9sntpJR3TPHm3L2zhGU1KSASC9VeV0Q9GdOA1tzrAAAAnElEQVQoz3XR2RKDIAwFUMGNTRSwLs3//2dNlKG18T4lc8IMgeohL23GJwKAmacejtQsrQJt4GgkajiaaiTHUdBIlqasXL9pN0gyYS2PyheKM9I7UqOw7jIlia3Zz64FTHuZxUaHPNpAubGjnadM+aRL15j6eceBUEYaElsBTEdYE/X3fT3kLNVfFnGSZ39F5D2ZbIp+hU/o7tf4AGOcDufFOhC7AAAAAElFTkSuQmCC) center center no-repeat}.today{color:red}.resign{color:rgba(255,83,83,0);width:30px;height:30px;margin:5px;background-size:100% 100%;background-image:url(//yun.duiba.com.cn/h5/sign/fhNews/bu.png)}"},enumerable:!0,configurable:!0}),e}();e.DuibaCalendar=a,Object.defineProperty(e,"__esModule",{value:!0})});