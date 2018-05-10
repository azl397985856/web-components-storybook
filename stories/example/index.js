import storiesOf from "../index";

// there is a problem to pass object/array down as props when using web-components
// and that's a bug, util react 17 released which will fix the bug, we hack that
// see more: https://github.com/ionic-team/stencil/issues/134
import stencil from "../../src/utils/stencil";

import forceUpdate from "../../src/utils/forceUpdate";

import styles from "./index.less";

function signin(date) {
  console.log("sigin with date：", date);
}

function isEmpty(o) {
  if (!o) return true;
  if (o.length === 0) return true;
  if (Object.keys(o).length === 0) return true;
}

function toggle(config) {
  if (config.count) {
    config.count = null;
  } else {
    config.count = 14;
  }
  // 初版组件通信方案：
  // 强制刷新页面（具体实现在utils/forceUpdate）
  forceUpdate();
}

const calendarAPI = {
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

export default storiesOf("签到")
  .add("基础用法", props => (
    <div className={styles["basic-wrapper"]}>
      <duiba-calendar
        ref={stencil(
          {},

          isEmpty(props)
            ? {}
            : {
                ...props,
                signin
              }
        )}
      />

      <div className={styles["duiba-collapse"]}>
        <duiba-collapse
          ref={stencil(
            {},
            {
              onClick: () => toggle(props)
            }
          )}
        />
      </div>
    </div>
  ))
  .desc("显示日历头部(初始化为展开，当前默认显示在第3天，原生日历样式)")
  .api(calendarAPI)
  .add("扩展用法", props => (
    <div className={styles["basic-wrapper"]}>
      <duiba-calendar
        ref={stencil(
          {},

          isEmpty(props)
            ? {}
            : {
                ...props,
                signin
              }
        )}
      />

      <div className={styles["duiba-collapse"]}>
        <duiba-collapse
          ref={stencil(
            {},
            {
              onClick: () => toggle(props)
            }
          )}
        />
      </div>
    </div>
  ))
  .desc("不显示日历头部(初始化为折叠,当前默认显示在第1天，非原生日历样式)")
  .api(calendarAPI);
