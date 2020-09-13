import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SectionList} from 'react-native';
const styles = StyleSheet.create(style);
import style from './CoinsDetail.styles';

class CoinsDetailScreen extends Component {
  state = {
    coin: {},
  };
  componentDidMount() {
    const {coin} = {...this.props.route.params};
    const {symbol = ''} = {...coin};
    this.props.navigation.setOptions({title: symbol});
    this.setCoinData(coin);
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
  render() {
    const {coin = {}} = {...this.state};
    const {name = ''} = {...coin};
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            source={{uri: this.getSymbolIcon(name)}}
            style={styles.iconImage}
          />
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <SectionList
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
      </View>
    );
  }
}

export default CoinsDetailScreen;
