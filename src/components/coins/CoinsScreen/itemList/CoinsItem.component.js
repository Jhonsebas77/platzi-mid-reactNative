import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './CoinsItem.styles';
const styles = StyleSheet.create(style);

const CoinsItem = ({name = '', symbol = ''}) => {
  return (
    <View>
      <Text style={styles.text}>
        {name} {symbol}
      </Text>
    </View>
  );
};

export default CoinsItem;
