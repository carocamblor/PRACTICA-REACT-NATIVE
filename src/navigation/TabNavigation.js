import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Register from '../screens/Register'
import Login from '../screens/Login';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function TabNavigation() {
  return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
              <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
                }}
                />
              <Tab.Screen
                name='Register'
                component={Register}
                options={{
                    tabBarIcon: () => <AntDesign name="adduser" size={24} color="black" />
                }}
                />
              <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    tabBarIcon: () => <AntDesign name="login" size={24} color="black" />
                }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default TabNavigation
