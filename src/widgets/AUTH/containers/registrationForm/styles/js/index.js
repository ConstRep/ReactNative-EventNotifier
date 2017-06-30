/**
 * @project react-native-boilerplate
 * @author Kostiantyn Zinevych
 * @version 1.0
 * @since 22.06.17
 */
// ----------index----------

import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({
  registrationForm: {
    backgroundColor: 'steelblue', //#618699
    paddingTop: 100,
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    padding: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  userLogo: {
    borderRadius: 150 / 2 * PixelRatio.get(),
    height: 150,
    width: 150,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  inputWrap: {
    flexDirection: 'row',
    marginTop: 20
  },
  btnWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  iconWrap: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3
  },
  iconWrapActive: {
    width: 40,
    height: 40,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3
  },
  iconWrapError: {
    width: 40,
    height: 40,
    backgroundColor: '#DB3C3C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3
  },
  inputDefault: {
    height: 40,
    flex: 1,
    color: '#618699',
    backgroundColor: '#fff',
    paddingLeft: 20,
    marginLeft: 5
  },
  button: {
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1
  },
  buttonPress: {
    width: '100%',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  buttonTextPress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#618699'
  },
  signInWrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }

});

export default styles;
