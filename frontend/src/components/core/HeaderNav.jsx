import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const HeaderNav = () => {
  return (
    <>
      <Menu inverted>
        <Menu.Item>
          <Icon name="book" size="big"/>
        </Menu.Item>
        <Menu.Item>Books</Menu.Item>
      </Menu>
    </>
  )}
export default HeaderNav;
