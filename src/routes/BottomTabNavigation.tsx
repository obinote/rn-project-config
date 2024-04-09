import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {BottomTab} from './route';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Navigator>
      <Screen
        name={BottomTab.Dashboard}
        options={{tabBarIcon: 'home'}}
        getComponent={() => require('screens/bottomTab/Dashboard').default}
      />
      <Screen
        name={BottomTab.Notification}
        options={{tabBarIcon: 'bell'}}
        getComponent={() => require('screens/bottomTab/Notification').default}
      />
      <Screen
        name={BottomTab.Profile}
        options={{tabBarIcon: 'account'}}
        getComponent={() => require('screens/bottomTab/Profile').default}
      />
      <Screen
        name={BottomTab.Settings}
        options={{tabBarIcon: 'cog'}}
        getComponent={() => require('screens/bottomTab/Settings').default}
      />
    </Navigator>
  );
};

export default BottomTabNavigation;
