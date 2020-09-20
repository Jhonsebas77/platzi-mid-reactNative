import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  ActivityIndicator,
  Pressable,
  Alert,
} from 'react-native';
import Http from './../../../libs/Http';
import MarketItem from './marketItem/index';
import style from './CoinsDetail.styles';
import Storage from './../../../libs/Storage';
const styles = StyleSheet.create(style);

class CoinsDetailScreen extends Component {
  state = {
    coin: {},
    markets: [],
    loading: true,
    isFavorite: false,
  };
  componentDidMount() {
    const {coin} = {...this.props.route.params};
    const {symbol = '', id = ''} = {...coin};
    this.props.navigation.setOptions({title: symbol});
    this.setCoinData(coin);
    this.getMarkets(id);
  }
  toggleFavorites = () => {
    const {isFavorite = false} = {...this.state};
    isFavorite ? this.removeFavorite() : this.addFavorite();
  };
  addFavorite = async () => {
    const {coin = {}} = {...this.state};
    const {id = ''} = {...coin};
    const coin_json = JSON.stringify(coin);
    const coin_key = `favorite-${id}`;
    const stored = await Storage.instance.store(coin_key, coin_json);
    if (stored) {
      this.setState({isFavorite: true});
    }
  };
  removeFavorite = async () => {
    Alert.alert('Remove Favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const {coin = {}} = {...this.state};
          const {id = ''} = {...coin};
          const coin_key = `favorite-${id}`;
          await Storage.instance.remove(coin_key);
          this.setState({isFavorite: false});
        },
        style: 'destructive',
      },
    ]);
  };
  getFavorites = async () => {
    try {
      const {coin = {}} = {...this.state};
      const {id = ''} = {...coin};
      const coin_key = `favorite-${id}`;
      const favStr = await Storage.instance.get(coin_key);
      !!favStr && this.setState({isFavorite: true});
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  setCoinData = (coin) => {
    this.setState({coin}, () => {
      this.getFavorites();
    });
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
    const {coin = {}, markets = [], loading = true, isFavorite = false} = {
      ...this.state,
    };
    const {name: nameCoin = ''} = {...coin};
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.row}>
            <Image
              source={{uri: this.getSymbolIcon(nameCoin)}}
              style={styles.iconImage}
            />
            <Text style={styles.titleText}>{nameCoin}</Text>
          </View>
          <Pressable
            onPress={this.toggleFavorites}
            style={[
              styles.btnFavorite,
              isFavorite ? styles.btnFavRemove : styles.btnFavAdd,
            ]}>
            <Text style={styles.btnFavoriteText}>
              {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </Text>
          </Pressable>
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
