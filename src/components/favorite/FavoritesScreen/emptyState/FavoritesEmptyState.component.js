import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import style from './FavoritesEmptyState.styles';
const styles = StyleSheet.create(style);
const FavoritesEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don`t have any favorite yet</Text>
    </View>
  );
};

export default FavoritesEmptyState;
