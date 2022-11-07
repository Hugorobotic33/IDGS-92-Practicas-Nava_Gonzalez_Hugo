import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Button,
  NativeBaseProvider,
  HStack,
  Spinner,
  Heading,
} from 'native-base';
import {useContext} from 'react';
import {CarritoContext} from '../../App';
const widthCard = Dimensions.get('window').width;
export const DetailsBook = ({route}) => {
  const {carrito, setCarrito} = useContext(CarritoContext);

  const {itemId} = route.params;

  const [bookd, setBookD] = useState({
    info: [],
    loading: true,
  });

  const fecthBook = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${itemId}?key=AIzaSyAS1vLmszSFnFbzjoLQSkSoq89rGEXJYjk`,
    )
      .then(res => res.json())
      .then(data => {
        setBookD({
          info: data,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fecthBook();
  }, [itemId, carrito]);

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#8FB4EF', padding: 30}}>
        {bookd.loading ? (
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <NativeBaseProvider>
              <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" color={'white'} />
                <Heading color="light.300" fontSize="md">
                  Cargando
                </Heading>
              </HStack>
            </NativeBaseProvider>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
            }}>
            <ImageBackground
              source={{uri: bookd.info.volumeInfo.imageLinks.thumbnail}}
              resizeMode="cover"
              style={{flex: 1, width: '100%'}}
              blurRadius={2}>
              <View style={{alignItems: 'center'}}>
                <View style={{paddingVertical: 10}}>
                  <Image
                    source={{uri: bookd.info.volumeInfo.imageLinks.thumbnail}}
                    style={{
                      width: 150,
                      height: 200,
                      borderRadius: 5,
                      shadowRadius: 300,
                    }}
                  />
                </View>
              </View>
            </ImageBackground>

            <Text style={{fontWeight: 'bold', marginTop: 5}}>
              {bookd.info.volumeInfo.title}
            </Text>
            <Text style={{...styles.p, color: '#1B4244'}}>
              {' '}
              {bookd.info.volumeInfo.authors}
            </Text>
            {/* <Text>{JSON.stringify(carrito)}</Text> */}

            <View style={{flexDirection: 'column', paddingVertical: 8}}>
              <Text
                style={{
                  ...styles.p,
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                4.0
              </Text>
              <View style={{flexDirection: 'row'}}>
                {new Array(4).fill('').map(() => (
                  <AntDesign name="star" size={20} color="#D4E34D" />
                ))}
              </View>
            </View>

            <View>
              {/* <Text style={styles.p}><Text style={{fontWeight:"bold"}}>Descripcion:</Text>{bookd.info.volumeInfo?.description.replace(/<[^>]*>?/g, '').substring(0,200)}</Text> */}
              <View style={{paddingHorizontal: 6, paddingVertical: 8}}>
                <Text style={styles.p}>
                  <Text style={{fontWeight: 'bold'}}>TPasta: </Text>Dura
                </Text>
                <Text style={styles.p}>
                  <Text style={{fontWeight: 'bold'}}>Editorial: </Text>
                  {bookd.info.volumeInfo.publisher}
                </Text>
                <Text style={styles.p}>
                  <Text style={{fontWeight: 'bold'}}>Categoria(s): </Text>
                  {bookd.info.volumeInfo.categories}
                </Text>
              </View>

              {/* <Text style={styles.p}><Text style={{fontWeight:"bold"}}>N.Paginas:</Text>{bookd.info.volumeInfo.pageCount}</Text> */}

              {/* <Text style={styles.p}><Text style={{fontWeight:"bold"}}>Rating:</Text>{bookd.info.volumeInfo.averageRating?bookd.info.volumeInfo.averageRating:4}.0 </Text> */}
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingVertical: 8,
                }}>
                $
                {bookd.info.saleInfo.listPrice.amount &&
                bookd.info.saleInfo.listPrice.amount != 0
                  ? bookd.info.saleInfo.listPrice.amount
                  : 40.0}{' '}
                MXN
              </Text>
            </View>

            <NativeBaseProvider>
              <Button
                backgroundColor={'black'}
                onPress={() => {
                  if (carrito.map(item => item.id).includes(bookd.info.id)) {
                    return;
                  } else {
                    setCarrito([
                      ...carrito,
                      {
                        id: bookd.info.id,
                        nombre: bookd.info.volumeInfo.title,
                        precio:
                          bookd.info.saleInfo.listPrice.amount &&
                          bookd.info.saleInfo.listPrice.amount != 0
                            ? bookd.info.saleInfo.listPrice.amount
                            : 40.0,
                      },
                    ]);
                  }
                }}>
                Agregar
              </Button>
            </NativeBaseProvider>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  p: {
    fontSize: 10,
  },
});
