import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen/index';
import CoinsDetailScreen from './CoinsDetail/index';
import Colors from './../../utils/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinsDetail" component={CoinsDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
