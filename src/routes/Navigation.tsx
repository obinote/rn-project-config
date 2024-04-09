import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from './route';

const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName={ROUTES.Home}>
        <Screen
          name={ROUTES.Login}
          getComponent={() => require('screens/Login').default}
        />
        <Screen
          name={ROUTES.Register}
          getComponent={() => require('screens/Register').default}
        />
        <Screen
          name={ROUTES.Home}
          options={{headerShown: false}}
          getComponent={() => require('routes/DrawerNavigation').default}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
