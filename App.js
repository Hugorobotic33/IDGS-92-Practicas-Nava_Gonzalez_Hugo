/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



const App = () => {


  return (
    <View style={styles.container}>
      {/* <View style={styles.paragr}>
      <Text>Esta es mi practica #1</Text>
      </View>
      <View style={styles.paragr2}>
      <Text>Esta es mi practica #1</Text>
      </View> */}
      <View style={styles.paragr3}>
      <Text style={styles.text}>Esta es mi practica #1</Text>
      <Image style={{width:100,height:100,borderRadius:10}} source={{uri:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg"}}/>

      </View>
      
      

    </View>

  );
};

const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"grey",
    // flexDirection:"column"
    
  },
  paragr:{
    flex:2,
    backgroundColor:"cornflowerblue"
  },
  paragr2:{
    flex:1,
    backgroundColor:"cornsilk"
  },
  paragr3:{
    flex:1,
    backgroundColor:"azure",
    alignItems:"center",
    justifyContent:"center",
    
  },
  text:{
    textAlignVertical:"center",
    marginBottom:30
    
  }


})





export default App;
