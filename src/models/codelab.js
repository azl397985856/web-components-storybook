import moment from "moment";

function signin(date) {
  console.log("sigin with date：", date);
}
export default {
  namespace: "codelab",
  state: {
    "/签到/基础用法": {
      signin,
      showHeader: true,
      startTime: moment(1512132974336),
      endTime: moment(1514724974336),
      currentTime: moment(1512432000000),
      calendarType: "native",
      ruleDescription: "123",
      crecord: "456",
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
    },
    "/签到/扩展用法": {
      signin,
      showHeader: false,
      startTime: moment(1512132974336),
      endTime: moment(1514724974336),
      currentTime: moment(1512432000000),
      calendarType: "nomal",
      ruleDescription: "123",
      crecord: "456",
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
    }
  },
  reducers: {
    update(state, { payload, namespace }) {
      return {
        ...state,
        [namespace]: {
          ...state[namespace],
          ...payload
        }
      };
    }
  }
};
