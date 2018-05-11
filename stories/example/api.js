export default {
  signin: { type: Function },
  showHeader: {
    type: Boolean,
    api: {
      name: "showHeader",
      desc: "是否显示日历头部",
      type: "Boolean",
      defaultValue: ""
    }
  },
  startTime: {
    type: Date,
    api: {
      name: "startTime",
      desc: "日历的开始时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  endTime: {
    type: Date,
    api: {
      name: "endTime",
      desc: "日历的结束时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  currentTime: {
    type: Date,
    api: {
      name: "currentTime",
      desc: "当前时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  calendarType: {
    type: String,
    options: ["native", "normal"],
    api: {
      name: "calendarType",
      desc: "枚举值（native | normal）",
      type: "String",
      defaultValue: ""
    }
  },

  monthResignedMap: {
    type: Object,
    api: {
      name: "monthResignedMap",
      desc: "签到的映射表；形如{1: true, 11: true}",
      type: "Object",
      defaultValue: ""
    }
  },
  monthSignedMap: {
    type: Object,
    api: {
      name: "monthSignedMap",
      desc: "补签的映射表；形如{1: true, 11: true}",
      type: "Object",
      defaultValue: ""
    }
  },
  count: {
    type: Number,
    title: "",
    api: {
      name: "count",
      desc: "折叠起来的时候显示的日期个数",
      type: "Number",
      defaultValue: ""
    }
  },
  todayIndex: {
    type: Number,
    title: "",
    api: {
      name: "todayIndex",
      desc: "折叠的时候今天显示在第几个",
      type: "Number",
      defaultValue: ""
    }
  }
};
