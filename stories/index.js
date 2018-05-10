function storiesOf(name) {
  const list = {
    [name]: {}
  };
  return {
    add(subname, render) {
      list[name][subname] = {
        render
      };
      this.subname = subname;
      return this;
    },
    props(props) {
      list[name][this.subname].props = props;
      return this;
    },
    desc(desc) {
      list[name][this.subname].desc = desc;
      return this;
    },
    api(api) {
      list[name][this.subname].api = api;
      return this;
    },
    show() {
      return this;
    },
    getStory() {
      return list;
    }
  };
}

export default storiesOf;
