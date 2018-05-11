var CalendarType;
(function (CalendarType) {
    CalendarType["Native"] = "native";
    CalendarType["Normal"] = "normal";
})(CalendarType || (CalendarType = {}));
const MS_PER_DAY = 24 * 60 * 60 * 1000;
function requireValidator(param) {
    Object.keys(param).forEach(field => {
        if (param[field] === null || param[field] === undefined) {
            throw `${field} is required, but got ${param[field]}`;
        }
    });
}
function isSameYear(a, b) {
    return new Date(+a).getFullYear() === new Date(+b).getFullYear();
}
function isSameMonth(a, b) {
    return new Date(+a).getMonth() === new Date(+b).getMonth();
}
function isSameDate(a, b) {
    return new Date(+a).getDate() === new Date(+b).getDate();
}
function isSameDay(a, b) {
    return isSameYear(+a, b) && isSameMonth(a, b) && isSameDate(a, b);
}
function findList(list, todayIndex, current) {
    for (let i = 0; i < list.length; i++) {
        const isCurrent = isSameDay(list[i], current);
        if (isCurrent) {
            if (i + 1 !== todayIndex) {
                return findList(list.slice(1), todayIndex, current);
            }
            else {
                return list;
            }
        }
    }
    return [];
}
// 截取日历
function getDerivedDateList(list, todayIndex, count, current) {
    // 2. 长度为count
    if (!count)
        return list;
    if (list.length < count)
        return list;
    // 如果指定count， 则截取list，至满足以下条件:
    // 1. 今天在todayIndex的位置
    const derivedList = findList(list, todayIndex, current);
    return derivedList.slice(0, count - derivedList.length);
}
// 生成日历的list，用于页面显示
function getDateList({ startTime, endTime, currentTime, calendarType, todayIndex = 1, count }) {
    const start = new Date(+startTime).getTime();
    const end = new Date(+endTime).getTime();
    const current = new Date(+currentTime).getTime();
    const list = [];
    // 有count不显示原生的效果
    if (!count && calendarType === "native") {
        const startDay = new Date(+startTime).getDay();
        for (let i = 0; i < startDay; i++) {
            list.push("");
        }
    }
    for (let i = start; i <= end; i = i + MS_PER_DAY) {
        list.push(i);
    }
    return getDerivedDateList(list, todayIndex, count, current);
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
export class Calendar {
    handleCellClick({ monthResignedMap, monthSignedMap, date, signin }) {
        if (monthResignedMap[date] || monthSignedMap[date])
            return;
        // 这里不判断date是否大于currentTime， 因为如果需求增加预签怎么办？
        signin(date);
    }
    render() {
        const { currentTime, endTime, startTime, showHeader, calendarType, monthResignedMap, monthSignedMap, todayIndex, count, signin } = this;
        requireValidator({
            startTime,
            endTime,
            currentTime,
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
            h("div", { class: "calendar-body" }, list.map(timestamp => (h("span", { class: `calendar-body-cell ${getClassName({
                    date: new Date(timestamp).getDate(),
                    currentTime,
                    monthResignedMap,
                    monthSignedMap
                })}`, onClick: this.handleCellClick.bind(this, {
                    monthResignedMap,
                    monthSignedMap,
                    date: new Date(timestamp).getDate(),
                    signin,
                    currentTime
                }) }, timestamp && new Date(timestamp).getDate()))))));
    }
    static get is() { return "duiba-calendar"; }
    static get properties() { return {
        "calendarType": {
            "type": String,
            "attr": "calendar-type"
        },
        "count": {
            "type": Number,
            "attr": "count"
        },
        "currentTime": {
            "type": "Any",
            "attr": "current-time"
        },
        "endTime": {
            "type": "Any",
            "attr": "end-time"
        },
        "monthResignedMap": {
            "type": "Any",
            "attr": "month-resigned-map"
        },
        "monthSignedMap": {
            "type": "Any",
            "attr": "month-signed-map"
        },
        "showHeader": {
            "type": "Any",
            "attr": "show-header"
        },
        "signin": {
            "type": "Any",
            "attr": "signin"
        },
        "startTime": {
            "type": "Any",
            "attr": "start-time"
        },
        "todayIndex": {
            "type": Number,
            "attr": "today-index"
        }
    }; }
    static get style() { return "/**style-placeholder:duiba-calendar:**/"; }
}
