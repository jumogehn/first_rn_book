import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = () => {
  return (
          <TouchableOpacity onPress={() => alert('My Button')}>
          <View style={{backgroundColor:'blue', pading: 10}}>
          <Text style={{fontSize:20, color:'white'}}>
          MyButton
          </Text>
          </View>
          </TouchableOpacity>
  )
}

export default MyButton;
