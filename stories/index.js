import calendar from "./calendar/";
import example from "./example/";

export default {
  ...calendar.getStory(),
  ...example.getStory()
};
