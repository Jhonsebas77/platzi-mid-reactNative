import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import style from './FavoritesScreen.styles';
import FavoritesEmptyState from './emptyState/FavoritesEmptyState.component';
import Storage from './../../../libs/Storage';
import CoinsItem from './../../coins/CoinsScreen/itemList/CoinsItem.component';
const styles = StyleSheet.create(style);

class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };
  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map((fav) => JSON.parse(fav[1]));
      this.setState({favorites});
    } catch (error) {
      console.log('[Error]', error);
    }
  };
  componentDidMount = () => {
    this.getFavorites();
    this.props.navigation.addListener('focus', this.getFavorites);
  };
  componentWillUnmount = () => {
    this.props.navigation.removeListener('focus', this.getFavorites);
  };
  handlePress = (coin) => {
    const {item = {}} = {...coin};
    this.props.navigation.navigate('CoinsDetail', {coin: item});
  };
  render() {
    const {favorites = []} = {...this.state};
    return (
      <View style={styles.container}>
        {favorites.length === 0 && <FavoritesEmptyState />}
        {favorites.length > 0 && (
          <FlatList
            data={favorites}
            renderItem={(item) => {
              return (
                <CoinsItem info={item} onPress={() => this.handlePress(item)} />
              );
            }}
          />
        )}
      </View>
    );
  }
}

export default FavoritesScreen;
