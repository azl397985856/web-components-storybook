export default function wc(customEvents = {}, props = {}) {
  let storedEl;

  return function(el) {
    Object.entries(customEvents).forEach(([name, value]) => {
      // If we have an element then add event listeners
      // otherwise remove the event listener
      const action = el ? el.addEventListener : storedEl.removeEventListener;
      if (typeof value === "function") {
        action(name, value);
        return;
      }
    });
    // If we have an element then set props
    if (el) {
      Object.entries(props).forEach(([name, value]) => {
        el[name] = value;
      });
    }
    storedEl = el;
  };
}
