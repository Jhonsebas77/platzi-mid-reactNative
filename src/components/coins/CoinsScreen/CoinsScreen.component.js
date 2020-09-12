import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
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

  handlePress = () => {
    this.props.navigation.navigate('CoinsDetail');
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
            const {item: item_ = {}} = {...item};
            return <CoinsItem info={item_} />;
          }}
        />
        <Pressable onPress={this.handlePress} style={styles.btn}>
          <Text style={styles.textTitle}>Ir a Detail</Text>
        </Pressable>
      </View>
    );
  }
}

export default CoinsScreen;
