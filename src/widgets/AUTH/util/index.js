import React, {Component} from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


export function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function renderError(clientError) {
  if (clientError)
    return (
      <Animatable.View animation="fadeIn" style={{ marginTop: 20, backgroundColor: '#fff', padding: 10, width: '100%' }}>
        <Text style={{ color: '#FB8C00', textAlign: 'center' }}>{clientError}</Text>
      </Animatable.View>
    )
}