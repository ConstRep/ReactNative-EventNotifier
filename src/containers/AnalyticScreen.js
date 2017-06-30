import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import Container from '../components/Container';
import NavBar from '../components/NavBar';

// Actions
import {logOut} from '../widgets/AUTH/action';

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

@connect(({auth}) => ({...auth}), {logOut})


class AnalyticScreen extends Component {
  render() {
    const {logOut} = this.props;

    return (
      <Container>
        <NavBar navigation={this.props.navigation} logOut={ logOut() } />
        <View>
          <Text style={styles.welcome}>
            AnalyticScreen
          </Text>
        </View>
      </Container>
    );
  }
}

export default AnalyticScreen;
