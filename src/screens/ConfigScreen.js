import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {
  Button,
  NativeBaseProvider,
  Input,
  Box,
  FormControl,
  Stack,
  WarningOutlineIcon,
} from 'native-base';

export const ConfigScreen = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#497ADC'}}>
        <NativeBaseProvider>
          <Box w="100%" maxWidth="300px" marginTop={8}>
            <FormControl isRequired>
              <Stack mx="4">
                <Text style={{fontSize: 13}}>Nombre</Text>
                <Input
                  mx="3"
                  placeholder="Nombre"
                  w="75%"
                  maxWidth="300px"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />
                <Text style={{fontSize: 13}}>Nombre de Usuario</Text>
                <Input
                  mx="3"
                  placeholder="Usuario123"
                  w="75%"
                  maxWidth="300px"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />
                <Text style={{fontSize: 13}}>Direccion de Correo</Text>
                <Input
                  mx="3"
                  placeholder="micorreo@gmail.com"
                  w="75%"
                  maxWidth="300px"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />
                <Text style={{fontSize: 13}}>Contraseña actual</Text>
                <Input
                  mx="3"
                  placeholder="contraseña actual"
                  w="75%"
                  maxWidth="300px"
                  type="password"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />
                <Text style={{fontSize: 13}}>Nueva Contraseña</Text>
                <Input
                  mx="3"
                  placeholder="nueva contraseña"
                  w="75%"
                  maxWidth="300px"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />
                <Text style={{fontSize: 13}}>Confirmar nueva contraseña</Text>
                <Input
                  mx="3"
                  placeholder="Confirmar"
                  w="75%"
                  maxWidth="300px"
                  focus={true}
                  marginBottom="4"
                  bg={'white'}
                  color={'black'}
                  variant="outline"
                  _hover={'black'}
                  _focus
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                  }}>
                  <Button>Guardar</Button>
                  <Button colorScheme={'red'}>Eliminar cuenta</Button>
                </View>
              </Stack>
            </FormControl>
          </Box>
        </NativeBaseProvider>
      </View>
    </ScrollView>
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
