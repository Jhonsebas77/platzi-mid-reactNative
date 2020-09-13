import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from './../../../libs/Http';
import MarketItem from './marketItem/index';
const styles = StyleSheet.create(style);
import style from './CoinsDetail.styles';

class CoinsDetailScreen extends Component {
  state = {
    coin: {},
    markets: [],
    loading: true,
  };
  componentDidMount() {
    const {coin} = {...this.props.route.params};
    const {symbol = '', id = ''} = {...coin};
    this.props.navigation.setOptions({title: symbol});
    this.setCoinData(coin);
    this.getMarkets(id);
  }
  setCoinData = (coin) => {
    this.setState({coin});
  };
  getSymbolIcon = (nameCoin) => {
    const symbol = nameCoin && nameCoin.toLowerCase().replace('-', '');
    return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
  };
  getSections = (coin) => {
    const {market_cap_usd = 0, volume24 = 0, percent_change_24h = 0} = {
      ...coin,
    };
    const sections = [
      {
        title: 'Market Cap',
        data: [market_cap_usd],
      },
      {
        title: 'Volume 24H',
        data: [volume24],
      },
      {
        title: 'Change 24',
        data: [percent_change_24h],
      },
    ];
    return sections;
  };
  getMarkets = async (coinId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    this.setState({markets, loading: false});
  };
  render() {
    const {coin = {}, markets = [], loading = true} = {...this.state};
    const {name: nameCoin = ''} = {...coin};
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            source={{uri: this.getSymbolIcon(nameCoin)}}
            style={styles.iconImage}
          />
          <Text style={styles.titleText}>{nameCoin}</Text>
        </View>
        <SectionList
          style={styles.section}
          sections={this.getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />
        <Text style={styles.textMarketTitle}>Mercados</Text>
        {loading && (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        )}
        <FlatList
          style={styles.list}
          data={markets}
          horizontal={true}
          renderItem={({item}) => <MarketItem info={item} />}
        />
      </View>
    );
  }
}

export default CoinsDetailScreen;
