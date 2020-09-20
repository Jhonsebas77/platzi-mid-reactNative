import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import style from './FavoritesScreen.styles';
import FavoritesEmptyState from './emptyState/FavoritesEmptyState.component';
const styles = StyleSheet.create(style);

class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}

export default FavoritesScreen;
