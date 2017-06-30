import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import Container from '../../components/Container';
import {RegistrationForm} from '../../widgets';

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

export default class SignUpScreen extends Component {

  render() {
    return (
      <Container>
        <RegistrationForm navigation={this.props.navigation} />
      </Container>
    );
  }
}
