import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {DrawerNav} from '../navigator';


// Components
import Container from '../components/Container';
import NavBar from '../components/NavBar';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default class WalletScreen extends Component {

  componentWillMount() {
    const {navigation} = this.props;
    AsyncStorage.getItem('@MySuperStore:access_token').then((token)=>{
      if (!token)
        navigation.navigate('SignIn');
    });
  }

  render() {
    return (
      <Container>
        <NavBar navigation={this.props.navigation}/>
        <View>
          <Text style={styles.welcome}>
            WalletScreen
          </Text>
        </View>
      </Container>
    );
  }
}
