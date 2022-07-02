import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from "../screens/DetailsScreen";

export const DetailsStack=()=>{
    const Details = createNativeStackNavigator();

    return(
        <Details.Navigator>
        <Details.Screen name="Details" component= {DetailsScreen}/>
         </Details.Navigator>
    );
}