import storiesOf from "../storyCore";

export default storiesOf("我是来凑数的")
  .add("basic usage", prop => "123")
  .add("advanced usage", props => "456")
  .show();
