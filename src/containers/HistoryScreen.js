import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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

export default class HistoryScreen extends Component {

  render() {
    return (
      <Container>
        <NavBar navigation={this.props.navigation}/>
        <View>
          <Text style={styles.welcome}>
            HistoryScreen
          </Text>
        </View>
      </Container>
    );
  }
}
