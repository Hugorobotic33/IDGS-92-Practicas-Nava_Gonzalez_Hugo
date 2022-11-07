/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginScreen from './src/auth/LoginScreen';
import {useState, createContext} from 'react';
import Tabs from './src/Tab';

export const CarritoContext = createContext();

const App = () => {
  const [showHome, setShowHome] = useState(false);
  // const [carrito,setCarrito]=([]);

  const [carrito, setCarrito] = useState([
    {id: 2, nombre: 'Batman', precio: 50},
  ]);
  return (
    <>
      {showHome ? (
        <CarritoContext.Provider value={{carrito, setCarrito}}>
          <Tabs />
        </CarritoContext.Provider>
      ) : (
        <LoginScreen setShowHome={setShowHome} />
      )}
    </>
  );
};

export default App;
