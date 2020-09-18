import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import style from './FavoritesScreen.styles';
const styles = StyleSheet.create(style);

class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favoritos</Text>
      </View>
    );
  }
}

export default FavoritesScreen;
