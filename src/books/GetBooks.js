import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {NativeBaseProvider, Divider} from 'native-base';
const widthCard = Dimensions.get('window').width / 2 - 20;

const GetBooks = () => {
  const [book, setBook] = useState('fundacion');
  const [books, setBooks] = useState([]);

  const fecthBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=18&filter=paid-ebooks&printType=books&key=AIzaSyDf-ZIvxIGsH1HDM51ToENr7UwO_khE_CY`,
    )
      .then(res => res.json())
      .then(data => {
        setBooks(data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fecthBooks();
  }, [book]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#497ADC'}}>
      <View>
        <TextInput
          placeholder="Buscar comic o libro"
          onChangeText={text => setBook(text)}
          style={{
            backgroundColor: 'white',
            padding: 10,
          }}
        />
      </View>

      {book == '' && (
        <View style={{alignItems: 'center', marginTop: 60}}>
          <Image
            source={{
              uri: 'https://www.softzone.es/app/uploads-softzone.es/2021/04/buscar-libros-calibre.jpg?x=480&y=375&quality=40',
            }}
            style={{width: 75, height: 100}}
          />
          <Text
            style={{
              letterSpacing: 1,
              color: 'white',
              fontWeight: 'bold',
              paddingVertical: 5,
            }}>
            Busca tu libro!
          </Text>
        </View>
      )}
      <FlatList
        numColumns={2}
        refreshing={true}
        data={books}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <Card item={item} />}
      />
    </SafeAreaView>
  );
};
const Card = ({item}) => {
  const book = {
    id: item.id,
    titulo: item.volumeInfo.title,
    autor: item.volumeInfo.authors,
    precio: item.saleInfo?.listPrice?.amount,
    editorial: item.volumeInfo.publisher,
    descripcion: item.volumeInfo.description,
    categoria: item.volumeInfo.categories,
    rating: item.volumeInfo.averageRating,
    imagen: item.volumeInfo?.imageLinks?.thumbnail,
    imagesm: item.volumeInfo?.imageLinks?.smallThumbnail,
  };
  const navigation = useNavigation();

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={{}}>
          {book.imagen ? (
            <Image source={{uri: book.imagen}} style={styles.image} />
          ) : (
            <Image
              source={{
                uri: 'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
              }}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.bodyCard}>
          <Text style={styles.title}>
            {book.titulo.length >= 35
              ? book.titulo.substring(0, 35) + '...'
              : book.titulo}
          </Text>

          <View style={{marginTop: 5}}>
            <Button
              color="#000"
              title="Detalles"
              onPress={() =>
                navigation.navigate('Libro Detalle', {
                  itemId: book.id,
                })
              }
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 15,
    alignItems: 'center',
    width: widthCard,
  },
  image: {
    width: 75,
    height: 100,
    borderRadius: 5,
  },
  bodyCard: {
    marginTop: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
    fontSize: 10,
  },
});
export default GetBooks;
