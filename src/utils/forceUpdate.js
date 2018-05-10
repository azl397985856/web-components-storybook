function replaceUrlParam(url, paramName, paramValue) {
  if (paramValue == null) {
    paramValue = "";
  }
  var pattern = new RegExp("\\b(" + paramName + "=).*?(&|$)");
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, "$1" + paramValue + "$2");
  }
  url = url.replace(/\?$/, "");
  return (
    url + (url.indexOf("?") > 0 ? "&" : "?") + paramName + "=" + paramValue
  );
}

function replaceHashSearch(key, newValue) {
  if (!window.location.hash.indexOf("random")) {
    window.location.hash = window.location.hash + `?random=${Math.random()}`;
  }
  window.location.hash = replaceUrlParam(
    window.location.hash,
    "random",
    Math.random()
  );
}

export default function forceUpdate() {
  replaceHashSearch();
}
