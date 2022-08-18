import React from "react";
import {View,Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./stacks/HomeStack";
import { ConfigStack} from "./stacks/DetailsStack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CarritoStack } from "./stacks/CarritoStack";
import { CarritoContext } from "../App";



const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const {carrito} = React.useContext(CarritoContext); 
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} 
      tabBarOptions={{        
        showLabel:false,
        inactiveTintColor:"#000",
        }}>
        <Tab.Screen name="Colibros" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size,focused}) => (
            focused?<Ionicons name="home-outline"  size={30} />:<Ionicons name="home" color={color} size={size} />
          ),
          // tabBarActiveTintColor: "#000000",
          // tabBarActiveBackgroundColor:"#ffd700",
          // tabBarInactiveTintColor:"#fffaf0",
          // tabBarShowLabel:false,
          // tabBarInactiveBackgroundColor:"#228b22",
        }}
        />
         <Tab.Screen 
          name="Carri"
          component={CarritoStack}
          options={{
            tabBarHeaderShown:true,
            tabBarLabel: 'Carrito',
            tabBarBadge:carrito.length,
            tabBarIcon: ({ color, size,focused}) => (
              focused?<Ionicons name="cart-outline" size={30} />:<Ionicons name="cart" color={color} size={size} />
            ),}}
          /> 
        <Tab.Screen name="Configu" 
          component={ConfigStack} 
          options={{
            tabBarLabel: 'Configuracion',
            tabBarIcon: ({ color, size,focused }) => (
              focused?<Ionicons name="settings-outline"  size={30} />:<Ionicons name="settings" color={color} size={size} />
            ),            
            
            }}/>

         
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;