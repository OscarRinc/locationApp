import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SVGImage from 'react-native-svg-image';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  AppRegistry,
} from 'react-native';
import { userData } from '../../redux/Actions/login'

// Clase para el login --->
const Login = (props) => {
  const { dispatch } = props
  const userObject = { username: '', password: ''}
  return (
    <View style={{flex: 1}}>
      <View style={{
        flex: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          top: -50,
          }}
        >
          <Image source={require('../../Images/me.png' )} style={{width: 140, height: 140}} />
        </View>
        <View style={{
          flex: 0,
          height: 90,
          justifyContent: 'space-between',
          alignItems: 'center',
          top: -100,
        }}>
          <TextInput
            underlineColorAndroid='transparent'
            style={{
              height: 40,
              width: 300,
              borderRadius: 4,
              textAlign: 'center',
              backgroundColor: '#96cb42',
              color: 'white',
            }}
            placeholder="Usuario"
            placeholderTextColor="white"
            onChangeText={(user) => userObject.username = user}
          />
          <TextInput
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            style={{
              height: 40,
              width: 300,
              borderRadius: 4,
              textAlign: 'center',
              backgroundColor: '#96cb42',
              color: 'white',
            }}
            placeholder="Contraseña"
            placeholderTextColor="white"
            onChangeText={(pass) => userObject.password = pass}
          />
        </View>
        <Text style={{color: 'white', top: -75, textDecorationLine: 'underline'}}>Olvidé mi contraseña</Text>
        <TouchableOpacity
         style={{
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: '#96cb42',
           top: -50,
           height: 40,
           width: 170,
           borderRadius: 4,
         }}
         onPress={() => {
           if(userObject)
           {
             dispatch(userData(userObject))
             props.navigation.navigate('List')
           }
         }}
        >
          <Text style={{color: 'white'}}> Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#96cb42',
      }}>
        <Text style={{color: 'white'}}>¿ Todavia no estas registrado ?</Text>
      </View>
    </View>
  )
}

AppRegistry.registerComponent('Login', () => Login);

export default connect()(Login);
