import React from "react";
import { useState } from "react";
import {Text,View,TextInput,Image,StyleSheet,Button} from "react-native";

import RegisterScreen from "./RegisterScreen";
const LoginScreen=({setShowHome})=>{


   const [showLogin,setShowLogin]=useState(true);

    return(
      <>
      {
        showLogin?
      
        <View style={styles.container}>


             <Image source={require('../assets/dcomix.jpeg')}
               style={{width: 100, height: 50,marginLeft:"auto",marginRight:"auto",marginBottom:10, borderRadius:10}} />

            <Text style={styles.title}>Iniciar sesion</Text>

            

            <View style={styles.subcontainer}>
              <Text style={{marginLeft:12}}>Direccion de Correo</Text>
                <TextInput 
               style={styles.input}
               placeholder="Correo"        
             
             />
             <Text style={{marginLeft:12}}>Contraseña</Text>
              <TextInput 
               style={styles.input}
               placeholder="Contraseña" 
               secureTextEntry={true}        
             
             />
            <View style={{marginTop:10,marginLeft:30,marginRight:30}}>
                <Button 
                 title="Iniciar"
                color="black"
                onPress={
                  (showHome)=>setShowHome(showHome)
              }
              
                
                
                
                
  
             /> 
            </View>
         
            </View>
    
           <Text style={{textAlign:"center",marginTop:30,fontFamily:"Helvetica"}}>¿Aun no te has registrado?, <Text onPress={(showLogin)=>setShowLogin(!showLogin)} style={{color:"white",fontWeight:"bold"}}>Registrate</Text> </Text>




        </View>:<RegisterScreen  setShowLogin={setShowLogin}/>

            }

</>
    );


}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#497ADC",
        
    },
    subcontainer:{
      marginLeft:40,
      marginRight:40, 

    },
    title:{
      fontFamily:"helvetica",
      textAlign:"center",
      marginBottom:10,
      fontWeight:"bold",
      fontSize:25
    },
    input: {         
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:8,
    backgroundColor:"white"
  },

})

export default LoginScreen;