import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/utils/colors';

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: Colors.carmine,
          style: {backgroundColor: Colors.blackPearl},
        }}>
        <Tabs.Screen
          name={'Coins'}
          component={CoinsStack}
          options={{
            tabBarLabel: 'Coins',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/img/bank.png')}
              />
            ),
            // tabBarBadge: 3,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
