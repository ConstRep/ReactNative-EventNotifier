/**
 * @project react-native-boilerplate
 * @author Kostiantyn Zinevych
 * @version 1.0
 * @since 21.06.17
 */
// ----------NavBar----------

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  navigationBar: {
    height: 80,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigationSandwich: {
    flex: 1
  },
  navigationText: {
    color: 'white'
  },
  navigationWrapTitle: {
    flex: 1,
    alignItems: 'center'
  },
  navigationTitle: {
    color: 'white'
  },
  navigationInfo: {
    flex: 1,
    alignItems: 'flex-end'
  }
});

class NavBar extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  _openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  _signOut = () => {
    const {navigation, logOut} = this.props;
    AsyncStorage.removeItem('@MySuperStore:access_token').then((token)=>{
      if (!token) {
        logOut();
        navigation.navigate('SignIn');
      }
    });
  };

  render() {
    const {state: {key}} = this.props.navigation;

    return (
      <View style={styles.navigationBar}>
        <View style={styles.navigationSandwich}>
          <TouchableOpacity onPress={this._openMenu}>
            <IOSIcon name="md-menu" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.navigationWrapTitle}>
          <Text style={styles.navigationTitle}>{key.toUpperCase()}</Text>
        </View>
        <View style={styles.navigationInfo}>
          <TouchableOpacity onPress={this._signOut}>
            <IOSIcon name="md-log-out" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NavBar;
