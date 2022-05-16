import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function TabNavigation(props) {
  return (
          <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
              <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
                }}
                />
              <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: () => <AntDesign name="user" size={24} color="black" />
                }}
                initialParams={{logout: () => props.route.params.logout()}}
                />
          </Tab.Navigator>
  );
}

export default TabNavigation
