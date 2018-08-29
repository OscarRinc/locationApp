import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'

const List = (props) => (
  <View style={{ flex: 1}}>
    <View style={{
      flex: 1,
      justifyContent: 'space-evenly',
    }}>
      <TouchableOpacity
       style={{
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'white',
         width: '100%',
         height: 60,
       }}
       onPress={() => props.navigation.navigate('Reset')}
      >
        <Text style={{color: 'black'}}>Reset</Text>
      </TouchableOpacity>
      <Divider style={{ backgroundColor: 'blue' }} />
      <TouchableOpacity
       style={{
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'white',
         width: '100%',
         height: 60,
       }}
       onPress={() => props.navigation.navigate('List')}
      >
        <Text style={{color: 'black'}}>List</Text>
      </TouchableOpacity>
      <Divider style={{ backgroundColor: 'blue' }} />
      <TouchableOpacity
       style={{
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'white',
         width: '100%',
         height: 60,
       }}
       onPress={() => props.navigation.navigate('Home')}
      >
        <Text style={{color: 'black'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default connect()(List);
