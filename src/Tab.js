import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./stacks/HomeStack";
import { DetailsStack } from "./stacks/DetailsStack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer tabBarOptions={{
      
      
    }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#000000",
          tabBarActiveBackgroundColor:"#ffd700",
          tabBarInactiveTintColor:"#fffaf0",
          tabBarShowLabel:false,
          tabBarInactiveBackgroundColor:"#228b22",
        }}
        />
        <Tab.Screen name="Details" 
          component={DetailsStack} 
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-details" color={color} size={size} />
            ),
            tabBarActiveTintColor: "#000000",
            tabBarActiveBackgroundColor:"#ffd700",
            tabBarShowLabel:false,
            tabBarInactiveTintColor:"#fffaf0",
            tabBarInactiveBackgroundColor:"#228b22",
            
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;