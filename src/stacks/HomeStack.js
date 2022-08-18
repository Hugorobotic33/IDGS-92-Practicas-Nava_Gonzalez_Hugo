import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { DetailsBook } from "../books/DetailsBook";

export const HomeStack=()=>{
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
        <Stack.Screen name="Colibros" component= {HomeScreen}/>
        <Stack.Screen name="Libro Detalle" component= {DetailsBook}/>
         </Stack.Navigator>
    );
}