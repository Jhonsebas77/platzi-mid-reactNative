import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CoinsDetailScreen extends Component {
  componentDidMount(){
    console.log('====================================');
    console.log('[COINS]', this.props.route.params);
    console.log('====================================');
  }
  render() {
    return (
      <View>
        <Text>Coin Detail Screen</Text>
      </View>
    );
  }
}

export default CoinsDetailScreen;
