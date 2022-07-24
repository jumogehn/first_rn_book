import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = () => {
  return (
          <TouchableOpacity
            onPress={() => alert('My Button')}
            //hitSlop={{left:100, top:100, right:100, bottom:100}}>
            pressRetensionOffset={{left:10, top:10, right:10, bottom:10}}>
          <View style={{backgroundColor:'blue', pading: 10, margin:10}}>
          <Text style={{fontSize:20, color:'white'}}>
          MyButton
          </Text>
          </View>
          </TouchableOpacity>
  )
}

export default MyButton;
