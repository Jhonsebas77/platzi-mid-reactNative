import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import style from './CoinsScreen.styles';
const styles = StyleSheet.create(style);

class CoinsScreen extends Component {
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
