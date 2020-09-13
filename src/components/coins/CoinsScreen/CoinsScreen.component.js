import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import Http from './../../../libs/Http';
import style from './CoinsScreen.styles';
import CoinsItem from './itemList/index';
const styles = StyleSheet.create(style);

class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: true,
  };
  componentDidMount = async () => {
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    const {data = {}} = {...res};
    this.setCoinsData(data);
  };
  setCoinsData = (data) => {
    this.setState({coins: data, loading: false});
  };

  handlePress = (coin) => {
    const {item = {}} = {...coin};
    this.props.navigation.navigate('CoinsDetail', {coin: item});
  };
  render() {
    const {coins = [], loading = true} = {...this.state};
    return (
      <View style={styles.container}>
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
