/**
 *
 * @param {需要复制的文字} text
 * @returns {成功返回true，失败返回false}
 */
function copy(text) {
  if (!document.execCommand) return false;

  const cpt = document.createElement("div");
  const input = document.createElement("input");
  input.value = text;
  cpt.appendChild(input);

  // 为了不让被看到
  cpt.style.position = "absolute"; // display或者visibility是不可取的。
  cpt.style.left = "-99999px";

  document.querySelector("body").appendChild(cpt);

  // 执行复制需要先选中
  input.select();
  try {
    if (document.execCommand("copy", false, null)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export default copy;
