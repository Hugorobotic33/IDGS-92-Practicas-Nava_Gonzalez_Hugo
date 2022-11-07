import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConfigScreen} from '../screens/ConfigScreen';

export const ConfigStack = () => {
  const Config = createNativeStackNavigator();

  return (
    <Config.Navigator>
      <Config.Screen name="Configuracion" component={ConfigScreen} />
    </Config.Navigator>
  );
};
