import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerRoutes} from './route';

const {Navigator, Screen} = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Navigator>
      <Screen
        name={DrawerRoutes.DrawerHome}
        getComponent={() => require('routes/BottomTabNavigation').default}
      />
    </Navigator>
  );
};

export default DrawerNavigation;
