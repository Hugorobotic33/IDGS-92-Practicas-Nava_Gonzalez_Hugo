import React from 'react';

import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CarritoContext} from '../../App';

export const CarritoScreen = () => {
  // const { nombre } = route.params;
  // const {precio} =route.params;

  const {carrito, setCarrito} = React.useContext(CarritoContext);

  const deleteBook = id => {
    let xd = carrito.filter(item => {
      return item.id !== id;
    });
    setCarrito(xd);
  };
  const precios = carrito.map(item => item.precio);
  const total = precios.reduce((a, b) => a + b, 0);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#497ADC'}}>
      {carrito == '' ? (
        <View
          style={{
            backgroundColor: '#BAE6FD',
            height: 60,
            marginVertical: 20,
            marginHorizontal: 6,
            justifyContent: 'center',
            borderRadius: 4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
              paddingBottom: 10,
            }}>
            <AntDesign name="infocirlce" size={20} color="black" />
            <Text
              style={{
                padding: 7,
                fontSize: 13,
                letterSpacing: 0.2,
                fontWeight: '200',
                fontFamily: 'mono-space',
              }}>
              Tu carrito esta vacio
            </Text>
          </View>
        </View>
      ) : (
        <View>
          {/* <View style={{backgroundColor:"black"}}>
           <Text style={{color:"white"}}>{JSON.stringify(nombre)}</Text>
          <Text style={{color:"white"}}>{JSON.stringify(precio)}</Text>
           </View> */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 20,
              padding: 15,
            }}>
            <View
              style={{
                width: '90%',
                height: 4,
                backgroundColor: 'black',
                marginHorizontal: 20,
                marginTop: 10,
              }}></View>

            {carrito.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                  }}>
                  <Text>#{index + 1}</Text>
                  <View style={{width: 120}}>
                    <Text>{item.nombre}</Text>
                  </View>
                  <Text>${item.precio}</Text>

                  <TouchableOpacity
                    style={{backgroundColor: 'black', height: 30, width: 30}}
                    onPress={() => deleteBook(item.id)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>X</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            <View
              style={{
                width: '90%',
                height: 4,
                backgroundColor: 'black',
                marginHorizontal: 20,
                marginTop: 10,
              }}></View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text style={{marginLeft: 20}}>Total:</Text>
              <Text style={{marginLeft: 120, fontWeight: 'bold'}}>
                ${total}
              </Text>
            </View>
          </View>

          {/* <NativeBaseProvider>
          <Center w="100%" marginTop={10}>
          <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
          borderColor: "coolGray.500"
        }} _light={{
          borderColor: "coolGray.200"
        }}>
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
          </VStack>
        </Center>

          </NativeBaseProvider>
        */}
        </View>
      )}
    </ScrollView>
  );
};
