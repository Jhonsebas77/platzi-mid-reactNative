import React, {Component, Fragment} from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import style from './CoinsSearch.styles';
const styles = StyleSheet.create(style);
const isIOS = Platform.OS === 'ios';

class CoinsSearch extends Component {
  state = {
    query: '',
  };
  handleText = (query) => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };
  render() {
    const {query = ''} = {...this.state};
    return (
      <Fragment>
        <TextInput
          style={[
            styles.textInput,
            isIOS ? styles.textInputIOS : styles.textInputAndroid,
          ]}
          onChangeText={this.handleText}
          value={query}
          placeholder={'Search Coins'}
          placeholderTextColor="#fff"
        />
      </Fragment>
    );
  }
}

export default CoinsSearch;
