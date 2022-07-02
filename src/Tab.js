import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./stacks/HomeStack";
import { DetailsStack } from "./stacks/DetailsStack";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Details" component={DetailsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;