/*! Built with http://stenciljs.com */
const { h } = window.duiba;

var CalendarType;
(function (CalendarType) {
    CalendarType["Native"] = "native";
    CalendarType["Normal"] = "normal";
})(CalendarType || (CalendarType = {}));
function requireValidator(param) {
    Object.keys(param).forEach(field => {
        if (param[field] === null || param[field] === undefined) {
            throw `${field} is required, but got ${param[field]}`;
        }
    });
}
// 生成日历的list，用于页面显示
function getDateList({ startTime, endTime, currentTime, calendarType, todayIndex = 1, count }) {
    const startDate = new Date(+startTime).getDate();
    const endDate = new Date(+endTime).getDate();
    const currentDate = new Date(+currentTime).getDate();
    const list = [];
    // 有count不显示原生的效果
    if (!count && calendarType === "native") {
        const startDay = new Date(+startTime).getDay();
        for (let i = 0; i < startDay; i++) {
            list.push("");
        }
    }
    for (let i = startDate; count && todayIndex
        ? i <= count + (currentDate - todayIndex)
        : i <= endDate; i++) {
        list.push(i);
    }
    // 如果指定count， 则截取list，至满足以下条件:
    // 1. 今天在todayIndex的位置
    // 2. 长度为count
    if ((todayIndex && calendarType !== "native") || (count && todayIndex)) {
        return list.slice(currentDate - todayIndex);
    }
    return list;
}
// 根据是否签到，是否补签，是否是今天，生成css class
// 今天 - today
// 正常签到 - sign
// 补签 - resign
function getClassName({ date, currentTime, monthResignedMap = {}, monthSignedMap = {} }) {
    const currentDate = new Date(+currentTime).getDate();
    const classSet = [];
    if (currentDate === date) {
        classSet.push("today");
    }
    if (monthResignedMap[date])
        return classSet.concat("resign").join(" ");
    if (monthSignedMap[date])
        return classSet.concat("sign").join(" ");
    return classSet.join("");
}
class Calendar {
    constructor() {
        this.config = {
            showHeader: true,
            startTime: null,
            endTime: null,
            currentTime: null,
            todaySigned: false,
            continueDays: 0,
            ruleDescription: null,
            crecord: null,
            monthResignedMap: {},
            monthSignedMap: {},
            calendarType: CalendarType.Normal,
            todayIndex: null,
            count: null,
            signin: null
        };
    }
    handleCellClick({ monthResignedMap, monthSignedMap, date, signin }) {
        if (monthResignedMap[date] || monthSignedMap[date])
            return;
        // 这里不判断date是否大于currentTime， 因为如果需求增加预签怎么办？
        signin(date);
    }
    render() {
        const { currentTime, endTime, startTime, crecord, ruleDescription, showHeader, calendarType, monthResignedMap, monthSignedMap, todayIndex, count, signin } = this.config;
        requireValidator({
            startTime,
            endTime,
            currentTime,
            ruleDescription,
            crecord,
            signin
        });
        const WEEK_DAYS = ["日", "一", "二", "三", "四", "五", "六"];
        const list = getDateList({
            startTime,
            endTime,
            currentTime,
            calendarType,
            todayIndex,
            count
        });
        return (h("div", { class: "calendar" },
            showHeader && (h("div", { class: "calendar-header" }, WEEK_DAYS.map(day => (h("span", { class: "calendar-header-item" }, day))))),
            h("div", { class: "calendar-body" }, list.map(date => (h("span", { class: `calendar-body-cell ${getClassName({
                    date,
                    currentTime,
                    monthResignedMap,
                    monthSignedMap
                })}`, onClick: this.handleCellClick.bind(this, {
                    monthResignedMap,
                    monthSignedMap,
                    date,
                    signin,
                    currentTime
                }) }, date))))));
    }
    static get is() { return "duiba-calendar"; }
    static get properties() { return {
        "config": {
            "type": "Any",
            "attr": "config"
        },
        "signin": {
            "type": "Any",
            "attr": "signin"
        }
    }; }
    static get style() { return ".calendar {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n   \n    -webkit-box-orient: vertical;\n   \n    -webkit-box-direction: normal;\n   \n    -webkit-flex-direction: column;\n   \n    -ms-flex-direction: column;\n   \n    flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    font-size: 14px;\n    text-align: center;\n    color: #ababab;\n    width: 300px;\n    margin: 0 auto;\n    background: #fff;\n    border-radius: 6px;\n    border: 2px solid #ababab;\n    padding: 10px;\n}\n\n.calendar-header {\n    text-align: left;\n    width: 300px;\n    height: 40px;\n}\n\n.calendar-body {\n    text-align: left;\n    width: 300px;\n}\n\n.calendar-header-item {\n    text-align: center;\n    display: inline-block;\n    width: 40px;\n    line-height: 40px;\n}\n\n.calendar-body-cell {\n    text-align: center;\n    display: inline-block;\n    width: 40px;\n    line-height: 40px;\n}\n\n.sign {\n    color: rgba(255, 83, 83, 0);\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    background:  url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAMAAABLXLayAAAAVFBMVEUAAAD2Q0P2RET1RET2RET3RET3RET4RUX1RET2Q0P2Q0P2Q0P2Q0P2Q0P2RET2Rkb5Rkb4Rkb/RET/UFD1Q0P3RET2RET4RUX3Rkb6R0f1RET2Q0OuMIdLAAAAG3RSTlMA9sntpJR3TPHm3L2zhGU1KSASC9VeV0Q9GdOA1tzrAAAAnElEQVQoz3XR2RKDIAwFUMGNTRSwLs3//2dNlKG18T4lc8IMgeohL23GJwKAmacejtQsrQJt4GgkajiaaiTHUdBIlqasXL9pN0gyYS2PyheKM9I7UqOw7jIlia3Zz64FTHuZxUaHPNpAubGjnadM+aRL15j6eceBUEYaElsBTEdYE/X3fT3kLNVfFnGSZ39F5D2ZbIp+hU/o7tf4AGOcDufFOhC7AAAAAElFTkSuQmCC\") center center no-repeat;\n}\n\n.today {\n    color: red;\n}\n\n.resign {\n    color: rgba(255, 83, 83, 0);\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    background-size: 100% 100%;\n    background-image: url(//yun.duiba.com.cn/h5/sign/fhNews/bu.png)\n}"; }
}

export { Calendar as DuibaCalendar };
