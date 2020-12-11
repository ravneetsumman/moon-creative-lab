import React from 'react';
import { Menu } from 'semantic-ui-react';

const HeaderNav = () => {
  return (
    <>
      <Menu stackable>
          <Menu.Item>
            <img src='/logo.png' />
          </Menu.Item>
          <Menu.Item>Books</Menu.Item>
          <Menu.Item>Sign-in</Menu.Item>
        </Menu>

    </>
  )

}
export default HeaderNav;
