import example from "./example/";
import button from "./button/";

export default {
  ...example.getStory(),
  ...button.getStory()
};
