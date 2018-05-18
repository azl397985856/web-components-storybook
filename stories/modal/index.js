import storiesOf from "../storyCore";

import al from "../../src/plugins/storybook/actionLogger";
import stencil from "../../src/utils/stencil";
import forceUpdate from "../../src/utils/forceUpdate";
import api from "./api";

const actionLogger = al.invoke;

function toggle(config, collapsed) {
  config.visible = false;

  forceUpdate();
}

export default storiesOf("Modal")
  .add("基础用法", props => (
    <div>
      <duiba-modal
        ref={stencil(
          {},

          {
            ...props,
            ...{
              onClose: (...rest) => {
                props.onClose(rest);
                toggle(props);
              }
            }
          }
        )}
      />
    </div>
  ))
  .cmpName("duiba-modal")
  .props({
    onClose: e =>
      actionLogger({
        payload: `onClose with e：${JSON.stringify(e)}`,
        name: "Modal"
      }),
    visible: false,
    title: "标题",
    subTitle: "副标题"
  })
  .desc("一个简单的弹层")
  .api(api);
