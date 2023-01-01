import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dashboard, Profile} from '../../container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen options={{}} name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
