import React from "react";
import {View,Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export const HomeScreen=()=>{
    return(

      <View>
        <Text>
            Pantalla Homescreen
        </Text>
        
        <Icon name="rocket" size={30} />

      </View>


    );
}