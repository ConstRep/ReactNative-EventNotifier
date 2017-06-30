import React, { Component, PropTypes } from 'react';
import { BackAndroid, StyleSheet, View } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux';
import StackNav from '../navigator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

@connect(
  state => ({
    nav: state.nav
  }),
  dispatch => ({ dispatch })
)

export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.backHandler = BackAndroid.addEventListener('backPress', () => {
      this.props.dispatch(NavigationActions.back());
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={styles.container}>
        <StackNav/>
      </View>
    );
  }
}
