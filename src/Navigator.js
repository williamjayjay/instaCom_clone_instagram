import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'

import { Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      showLabel: true,
      activeTintColor: '#e91e63',
      inactiveTintColor:'#ccc'

    }}
  >
      <Tab.Screen
      name="Home" component={Feed}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={30} />
        ),
      }} />
        
        <Tab.Screen
      name="Camera" component={Feed}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="camera" color={color} size={30} />
        ),
      }} />

      <Tab.Screen
      name="Profile" component={Feed}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={30} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


// const MenuRoutes = {
//     Feed: {
//         name: 'Feed',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Feed',
//             tabBarIcon: ({ tintColor }) => 
//                 <Icon name='home' size={30} color={tintColor} />
//         }
//     },
//     Add: {
//         name: 'AddPhoto',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Add Picture',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='camera' size={30} color={tintColor} />
//         }
//     },
//     Profile: {
//         name: 'Profile',
//         scrren: Feed,
//         navigationOptions: {
//             title: 'Profile',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='user' size={30} color={tintColor} />
//         }
//     }
// }

// const MenuConfig = {
//     initialRouteName: 'Feed',
//     tabBarOptions: {
//         showLabel: false,
//     }
// }

// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
// export default MenuNavigator