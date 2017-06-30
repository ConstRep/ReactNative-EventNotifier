/**
 * @project react-native-boilerplate
 * @author Kostiantyn Zinevych
 * @version 1.0
 * @since 21.06.17
 */
// ----------Container----------

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

export default class Container extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}
