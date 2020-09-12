import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import style from './CoinsItem.styles';
const styles = StyleSheet.create(style);
const CoinsItem = ({info = {}, onPress = () => {}}) => {
  const {item = {}} = {...info};
  const {name = '', symbol = '', percent_change_1h = '', price_usd = ''} = {
    ...item,
  };

  const getImageArrow = () => {
    if (percent_change_1h > 0) {
      return require('./../../../../assets/img/arrow_up.png');
    } else {
      return require('./../../../../assets/img/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textSymbol}>{symbol}</Text>
        <Text style={styles.textPriceUsd}>{`$ ${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textPercent}>{percent_change_1h}</Text>
        <Image source={getImageArrow()} style={styles.imageIcon} />
      </View>
    </Pressable>
  );
};

export default CoinsItem;
