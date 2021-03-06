import moment from "moment";

import storiesOf from "../storyCore";

import al from "../../src/plugins/storybook/actionLogger";

// there is a problem to pass object/array down as props when using web-components
// and that's a bug, util react 17 released which will fix the bug, we hack that
// see more: https://github.com/ionic-team/stencil/issues/134
import stencil from "../../src/utils/stencil";
import forceUpdate from "../../src/utils/forceUpdate";

import calendarAPI from "./api";

import styles from "./index.less";

const actionLogger = al.invoke;

let basicCollapsed = false;
let advancedCollapsed = true;

function isEmptyObject(o) {
  if (Object.prototype.toString.call(o) !== "[object Object]") return false;
  if (Object.keys(o).length === 0) return true;
  return false;
}

// 这里涉及组件间相互通信
// 暂时使用forceUpdate， 将来优化
function toggle(config, collapsed) {
  if (config.count) {
    config.count = null;
  } else {
    config.count = 14;
  }

  advancedCollapsed = !advancedCollapsed;
  basicCollapsed = !basicCollapsed;
  forceUpdate();
}

export default storiesOf("签到")
  .add("基础用法", props => (
    <div className={styles["basic-wrapper"]}>
      <duiba-calendar
        ref={stencil(
          {},

          isEmptyObject(props) ? {} : props
        )}
      />

      <div className={styles["duiba-collapse"]}>
        <duiba-collapse
          ref={stencil(
            {},
            {
              onClick: collapsed => toggle(props, collapsed),
              defaultCollapsed: false,
              collapsed: basicCollapsed
            }
          )}
        />
      </div>
    </div>
  ))
  .cmpName("duiba-calendar")
  .props({
    signin: date =>
      actionLogger({
        payload: `sigin with date：${date}`,
        name: "签到"
      }),
    showHeader: true,
    startTime: moment(1512132974336),
    endTime: moment(1514724974336),
    currentTime: moment(1512432000000),
    calendarType: "native",
    monthResignedMap: {
      3: true,
      8: true
    },
    monthSignedMap: {
      11: true,
      22: true
    },
    todayIndex: 3,
    count: null
  })
  .desc("显示日历头部(初始化为展开，当前默认显示在第3天，原生日历样式)")
  .api(calendarAPI)
  .add("扩展用法", props => (
    <div className={styles["basic-wrapper"]}>
      <duiba-calendar
        ref={stencil(
          {},

          isEmptyObject(props) ? {} : props
        )}
      />

      <div className={styles["duiba-collapse"]}>
        <duiba-collapse
          ref={stencil(
            {},
            {
              onClick: collapsed => toggle(props, collapsed),
              defaultCollapsed: true,
              collapsed: advancedCollapsed
            }
          )}
        />
      </div>
    </div>
  ))
  .desc("不显示日历头部(初始化为折叠,当前默认显示在第1天，非原生日历样式)")
  .props({
    signin: date =>
      actionLogger({
        payload: `sigin with date：${date}`,
        name: "签到"
      }),
    showHeader: false,
    startTime: moment(1512132974336),
    endTime: moment(1514724974336),
    currentTime: moment(1512432000000),
    calendarType: "nomal",
    monthResignedMap: {
      3: true,
      8: true
    },
    monthSignedMap: {
      11: true,
      22: true
    },
    todayIndex: 1,
    count: 14
  })
  .cmpName("duiba-calendar")
  .api(calendarAPI);
