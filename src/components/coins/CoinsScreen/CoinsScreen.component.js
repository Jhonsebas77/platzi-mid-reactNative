import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Http from './../../../libs/Http';
import style from './CoinsScreen.styles';
const styles = StyleSheet.create(style);

class CoinsScreen extends Component {
  componentDidMount = async () => {
    const coins = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    console.log('====================================');
    console.log('[coins]', coins);
    console.log('====================================');
  };

  handlePress = () => {
    this.props.navigation.navigate('CoinsDetail');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Coins Detail</Text>
        <Pressable onPress={this.handlePress} style={styles.btn}>
          <Text style={styles.textTitle}>Ir a Detail</Text>
        </Pressable>
      </View>
    );
  }
}

export default CoinsScreen;
