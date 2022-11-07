import React from 'react';
import {Text, View, TextInput, Image, StyleSheet, Button} from 'react-native';

const RegisterScreen = ({setShowLogin}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/dcomix.jpeg')}
        style={{
          width: 100,
          height: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10,
          borderRadius: 10,
        }}
      />

      <Text style={styles.title}>Registrarse</Text>

      <View style={styles.subcontainer}>
        <Text style={{marginLeft: 12}}>Nombre de usuario</Text>
        <TextInput style={styles.input} placeholder="nombre de usuario" />
        <Text style={{marginLeft: 12}}>Direccion de Correo</Text>
        <TextInput style={styles.input} placeholder="Correo" />
        <Text style={{marginLeft: 12}}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry={true}
        />
        <Text style={{marginLeft: 12}}>Confirmar Contraseña</Text>
        <TextInput style={styles.input} placeholder="" secureTextEntry={true} />
        <View style={{marginTop: 10, marginLeft: 30, marginRight: 30}}>
          <Button
            title="Registrarme"
            color="black"
            // onPress={
            //     (screen)=>setShowScreen(!screen)
            // }
          />
        </View>
      </View>

      <Text
        style={{textAlign: 'center', marginTop: 20, fontFamily: 'Helvetica'}}>
        ¿Ya te has registrado?,{' '}
        <Text
          onPress={showLogin => setShowLogin(showLogin)}
          style={{color: 'white', fontWeight: 'bold'}}>
          Inicia sesion
        </Text>{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#497ADC',
  },
  subcontainer: {
    marginLeft: 40,
    marginRight: 40,
  },
  title: {
    fontFamily: 'helvetica',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    height: 40,
    marginLeft: 12,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default RegisterScreen;
