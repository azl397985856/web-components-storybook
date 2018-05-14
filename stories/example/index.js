import storiesOf from "../storyCore";

export default storiesOf("example")
  .add("basic usage", prop => "123")
  .cmpName("example")
  .add("advanced usage", props => "456")
  .cmpName("example")
  .show();
