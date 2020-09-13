import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './MarketItem.styles';
const styles = StyleSheet.create(style);
const MarketItem = ({info = {}}) => {
  const {name = '', price_usd = ''} = {
    ...info,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textPriceUsd}>{`$ ${price_usd}`}</Text>
    </View>
  );
};

export default MarketItem;
