import React, {Component} from "react";
import { Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity, AsyncStorage } from 'react-native';
import {connect} from "react-redux";
import IOSIcon from "react-native-vector-icons/Ionicons";


// Actions
import {signUp, checkEmailRegistration, logOut} from '../../action';

// Utils
import {renderError} from '../../util';

//Styles
import styles from './styles/js';


@connect(({auth}) => ({...auth}), {signUp, checkEmailRegistration, logOut})

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVerified: null,
      password: null,
      repeatPassword: null,
      passwordVerified: null,
      repeatPasswordVerified: null,
      isEnterPassword: null,
      pressStatus: false
    }
  }

  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  _onChangeEmail(email) {
    const {checkEmailRegistration} = this.props;
    this.setState({ email: email });

    if (email.length > 5)
      checkEmailRegistration(email);
  }

  _onChangeName(name) {
    this.setState({name: name});

    if (name.length >= 3) {
      this.setState({nameVerified: true});
    } else if((name.length < 3) && (name.length !== 0)) {
      this.setState({nameVerified: false});
    } else {
      this.setState({nameVerified: null});
    }
  }

  _onChangePassword(password) {
    this.setState({password: password});

    if (password.length >= 6) {
      this.setState({isEnterPassword: true});
    } else if ((password.length < 6) && (password.length !== 0)) {
      this.setState({isEnterPassword: false});
    } else {
      this.setState({isEnterPassword: null});
    }
  }

  _onChangeRepeatPassword(repeatPassword) {
    this.setState({repeatPassword: repeatPassword});

    if (repeatPassword === this.state.password) {
      this.setState({repeatPasswordVerified: true});
    } else if ((repeatPassword !== this.state.password) && (repeatPassword.length !== 0)) {
      this.setState({repeatPasswordVerified: false});
    } else {
      this.setState({repeatPasswordVerified: null});
    }
  }

  _signUp() {
    const {signUp, navigation} = this.props;
    const {email, name, password, repeatPassword } = this.state;
    signUp(email, name, password, repeatPassword, navigation);
  }

  componentWillMount() {
    const {navigation, logOut} = this.props;

    AsyncStorage.getItem('@MySuperStore:access_token').then((token)=>{
      if (token) {
        navigation.navigate('Main');
      } else {
        logOut();
      }
    });
  }

  render() {
    const {navigation, clientError, userExists} = this.props;
    const {nameVerified, isEnterPassword, repeatPasswordVerified} = this.state;

    return (
      <View style={styles.registrationForm}>
        <View style={styles.body}>
          <View style={styles.inputWrap}>
            <View style={ (userExists === true)? styles.iconWrapError : (userExists === false)?styles.iconWrapActive:styles.iconWrap }>
              <IOSIcon name="md-mail" size={30} color={ (userExists === true)? "#fff": (userExists === false)? "#fff": "#333" } />
            </View>
            <TextInput
              style={styles.inputDefault}
              type="email"
              name="email"
              underlineColorAndroid="rgba(0,0,0,0)"
              selectionColor="#618699"
              placeholderTextColor="#618699"
              placeholder="Enter your Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={ (email) => this._onChangeEmail(email) }/>
          </View>
          <View style={styles.inputWrap}>
            <View style={ (nameVerified === false)? styles.iconWrapError : (nameVerified === true)?styles.iconWrapActive:styles.iconWrap }>
              <IOSIcon name="md-contact" size={30} color={ (nameVerified === true)? "#fff": (nameVerified === false)? "#fff": "#333" } />
            </View>
            <TextInput
              style={styles.inputDefault}
              type="text"
              name="name"
              underlineColorAndroid="rgba(0,0,0,0)"
              selectionColor="#618699"
              placeholderTextColor="#618699"
              placeholder="Enter your Name"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={ (name) => this._onChangeName(name) }/>
          </View>
          <View style={styles.inputWrap}>
            <View style={ (isEnterPassword === false)? styles.iconWrapError : (isEnterPassword === true)?styles.iconWrapActive:styles.iconWrap }>
              <IOSIcon name="md-lock" size={30} color={ (isEnterPassword === true)? "#fff": (isEnterPassword === false)? "#fff": "#333" } />
            </View>
            <TextInput
              style={styles.inputDefault}
              type="password"
              name="password"
              underlineColorAndroid="rgba(0,0,0,0)"
              selectionColor="#618699"
              placeholderTextColor="#618699"
              placeholder="Enter your Password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={ (password) => this._onChangePassword(password) }/>
          </View>
          <View style={styles.inputWrap}>
            <View style={ (repeatPasswordVerified === false)? styles.iconWrapError : (repeatPasswordVerified === true)?styles.iconWrapActive:styles.iconWrap }>
              <IOSIcon name="md-unlock" size={30} color={ (repeatPasswordVerified === true)? "#fff": (repeatPasswordVerified === false)? "#fff": "#333" } />
            </View>
            <TextInput
              style={styles.inputDefault}
              type="password"
              name="repeat-password"
              underlineColorAndroid="rgba(0,0,0,0)"
              selectionColor="#618699"
              placeholderTextColor="#618699"
              placeholder="Repeat your Password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={ (repeatPassword) => this._onChangeRepeatPassword(repeatPassword) }/>
          </View>
          <View style={{ height: 50 }}>
            { renderError(clientError) }
          </View>
          <View style={styles.btnWrap}>
            <TouchableHighlight
              onPress={ ()=> this._signUp() }
              underlayColor="#fff"
              onHideUnderlay={ ()=>this._onHideUnderlay() }
              onShowUnderlay={ ()=>this._onShowUnderlay() }
              style={ this.state.pressStatus ? styles.buttonPress : styles.button }
            >
              <Text style={ this.state.pressStatus ? styles.buttonTextPress : styles.buttonText }>Sign Up</Text>
            </TouchableHighlight>
          </View>
          <View style={ styles.signInWrap }>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={ () => navigation.goBack() }>
              <IOSIcon style={{ color: '#fff' }} name="md-arrow-back" size={20} color="#333" />
              <Text style={{ color: '#fff', marginLeft: 10 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default RegistrationForm;