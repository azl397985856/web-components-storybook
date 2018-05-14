import stories from "../../stories/index";

function getStoreState(stories) {
  let ret = [];
  Object.keys(stories).forEach(story => {
    const suite = stories[story];

    Object.keys(suite).forEach(key =>
      ret.push({
        [`${story}/${key}`]: (suite[key] || {}).props
      })
    );
  });

  return ret.reduce(
    (acc, current) => ({
      ...acc,
      ...current
    }),
    {}
  );
}

export default {
  namespace: "codelab",
  state: getStoreState(stories),
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
