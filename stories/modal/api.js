export default {
  onClose: {
    type: Function,
    api: {
      name: "onClose",
      desc: "关闭的回调函数",
      type: "Function",
      defaultValue: "() => void 0"
    }
  },
  visible: {
    type: Boolean,
    api: {
      name: "visible",
      desc: "是否显示",
      type: "Boolean",
      defaultValue: "false"
    }
  },
  title: {
    type: String,
    api: {
      name: "title",
      desc: "标题",
      type: "String",
      defaultValue: ""
    }
  },
  subTitle: {
    type: String,
    api: {
      name: "subTitle",
      desc: "副标题",
      type: "String",
      defaultValue: ""
    }
  },
  width: {
    type: String,
    api: {
      name: "width",
      desc: "宽度（目前仅支持字符串）",
      type: "String",
      defaultValue: "250px"
    }
  },
  height: {
    type: String,
    api: {
      name: "height",
      desc: "高度（目前仅支持字符串）",
      type: "String",
      defaultValue: ""
    }
  }
};
