import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { AntDesign } from '@expo/vector-icons';
import NewPost from '../screens/NewPost';

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
                name='New Post'
                component={NewPost}
                options={{
                    tabBarIcon: () => <AntDesign name="pluscircleo" size={24} color="black" />
                }}
                initialParams={{logout: () => props.route.params.logout()}}
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
