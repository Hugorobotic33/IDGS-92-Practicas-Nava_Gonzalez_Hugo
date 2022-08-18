import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarritoScreen } from "../screens/CarritoScreen";

export const CarritoStack=()=>{
    const Carrito = createNativeStackNavigator();

    return(
        <Carrito.Navigator>
        <Carrito.Screen name="MiCarrito" component= {CarritoScreen}/>
         </Carrito.Navigator>
    );
}