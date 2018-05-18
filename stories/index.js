import calendar from "./calendar/";
import modal from "./modal/";

export default {
  ...calendar.getStory(),
  ...modal.getStory()
};
