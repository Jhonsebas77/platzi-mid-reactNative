import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import Http from './../../../libs/Http';
import style from './CoinsScreen.styles';
import CoinsItem from './itemList/index';
import CoinsSearch from './../CoinsSearch/index';
const styles = StyleSheet.create(style);

class CoinsScreen extends Component {
  state = {
    coins: [],
    allCoins: [],
    loading: true,
  };
  componentDidMount = async () => {
    this.getCoins();
  };
  getCoins = async () => {
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    const {data = {}} = {...res};
    this.setState({coins: data, loading: false, allCoins: data});
  };

  handlePress = (coin) => {
    const {item = {}} = {...coin};
    this.props.navigation.navigate('CoinsDetail', {coin: item});
  };
  handleSearch = (query = '') => {
    const {allCoins = []} = {...this.state};
    const coinsFiltered = allCoins.filter((coin) => {
      const {name = '', symbol = ''} = {...coin};
      const nameLower = name.toLowerCase();
      const symbolLower = symbol.toLowerCase();
      const queryLower = !!query && query.toLowerCase();
      return nameLower.includes(queryLower) || symbolLower.includes(queryLower);
    });
    this.setState({coins: coinsFiltered});
  };
  render() {
    const {coins = [], loading = true} = {...this.state};
    return (
      <View style={styles.container}>
        <CoinsSearch onChange={this.handleSearch} />
        {loading && (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        )}
        <FlatList
          data={coins}
          renderItem={(item) => {
            return (
              <CoinsItem info={item} onPress={() => this.handlePress(item)} />
            );
          }}
        />
      </View>
    );
  }
}

export default CoinsScreen;
