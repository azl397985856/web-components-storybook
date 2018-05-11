import storiesOf from "../storyCore";

export default storiesOf("example")
  .add("basic usage", prop => "123")
  .add("advanced usage", props => "456")
  .show();
