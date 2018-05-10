import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  render() {
    const props = this.props;
    const { stories } = props;

    return (
      <Menu style={{ width: 256 }} mode="inline">
        {Object.keys(stories).map(subKey => (
          <SubMenu
            key={subKey}
            title={
              <span>
                <Icon type="appstore" />
                <span>{subKey}</span>
              </span>
            }
          >
            <MenuItemGroup title="">
              {Object.keys(stories[subKey]).map(itemKey => (
                <Menu.Item key={`${subKey} ${itemKey}`}>
                  <Link to={`/${subKey}/${itemKey.split(" ").join("")}`}>
                    {itemKey}
                  </Link>
                </Menu.Item>
              ))}
            </MenuItemGroup>
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

export default Sider;
