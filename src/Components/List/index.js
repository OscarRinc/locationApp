import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import { SearchBar, Card } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

const List = (props) => (
  <View style={{ flex: 1}}>
    <View style={{
      flex: 9,
    }}>
      <Card>
        <View key='1' style={{ flex: 0, flexDirection: 'row' }}>
          <View style={{flex: 0}}>
            <Text>{props.user.userData.username}</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View key='1' style={{ flex: 0, flexDirection: 'row' }}>
          <View style={{flex: 0}}>
            <Text>{props.user.userData.password}</Text>
          </View>
        </View>
      </Card>
    </View>
  </View>
)

const mapStateToProps = (state, props) => {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(List);
