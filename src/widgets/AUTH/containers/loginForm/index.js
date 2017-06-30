import React, {Component} from "react";
import { AsyncStorage, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import {connect} from "react-redux";
import IOSIcon from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';


// Actions
import {signIn, checkEmailLogin, logOut} from '../../action';

// Utils
import {renderError} from '../../util';

//Styles
import styles from './styles/js';


@connect(({auth}) => ({...auth}), {signIn, checkEmailLogin, logOut})

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnterPassword: false,
      pressStatus: false
    }
  }
  
  userLogo() {
    const { userExists } = this.props;

    if (userExists) {
      return (
        <Animatable.View animation="fadeIn" style={styles.userLogo}>
          <IOSIcon name="md-person" size={60} color="#333"/>
        </Animatable.View>
      )
    } else {
      return null;
    }
  }

  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }

  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  _onChangeEmail(email) {
    const {checkEmailLogin} = this.props;
    this.setState({ email: email });

    if (email.length > 5)
      checkEmailLogin(email);
  }

  _onChangePassword(password) {
    this.setState({ password: password });

    if (password.length >= 6) {
      this.setState({isEnterPassword: true});
    } else {
      this.setState({isEnterPassword: false});
    }
  }

  _signIn() {
    const {signIn, navigation} = this.props;
    const {email, password} = this.state;
    this.setState({ pressStatus: true });
    signIn(email, password, navigation);
  }

  componentWillMount() {
    const {navigation, user} = this.props;
    if (user)
      this.setState({email: user.email});

    AsyncStorage.getItem('@MySuperStore:access_token').then((token)=>{
      if (token)
        navigation.navigate('Main');
    });
  }

  render() {
    const { navigation, userExists, user, clientError} = this.props;
    const { isEnterPassword } = this.state;

    return (
      <View style={styles.loginForm}>
          <Animatable.View animation="fadeIn" delay={1000} style={styles.body}>
            <View style={{ height: 150 }}>
              { this.userLogo() }
            </View>
            <View style={ styles.inputWrap }>
              <View style={ (userExists === false)? styles.iconWrapError : (userExists === true)?styles.iconWrapActive:styles.iconWrap }>
                <IOSIcon name="md-mail" size={30} color={ (userExists)? "#fff": "#333" } />
              </View>
              <TextInput
                defaultValue={ this.state.email }
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
              <View style={ (isEnterPassword)? styles.iconWrapActive :styles.iconWrap }>
                <IOSIcon name="md-lock" size={30} color={ (isEnterPassword)? "#fff": "#333" } />
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
            <View style={{ height: 50 }}>
              { renderError(clientError) }
            </View>
            <View style={styles.btnWrap}>
              <TouchableHighlight
                onPress={ ()=> this._signIn() }
                underlayColor="#fff"
                onHideUnderlay={ ()=>this._onHideUnderlay() }
                onShowUnderlay={ ()=>this._onShowUnderlay() }
                style={ this.state.pressStatus ? styles.buttonPress : styles.button }
              >
                <Text style={ this.state.pressStatus ? styles.buttonTextPress : styles.buttonText }>Sign In</Text>
              </TouchableHighlight>
            </View>
            <View style={ styles.signInWrap }>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={ () => navigation.navigate('SignUp') }>
                <Text style={{ color: '#fff', marginRight: 10 }}>Sign Up</Text>
                <IOSIcon style={{ color: '#fff' }} name="md-arrow-forward" size={20} color="#333" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
      </View>
    )
  }
}

export default LoginForm;