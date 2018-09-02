import React, { Component } from 'react';

import { createDrawerNavigator,DrawerItems } from 'react-navigation';

import LoginScreen from '../Screen/LoginScreen';
import HomeScreen from '../Screen/HomeScreen';

export const MyRoute = createDrawerNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen }
},{
    initialRouteName: 'Login'
});