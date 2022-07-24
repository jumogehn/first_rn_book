import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = (props) => {
  console.log(props);
  return (
          <TouchableOpacity onPress={props.onPress}>
          <View style={{backgroundColor:'blue', pading: 10, margin:10}}>
          <Text style={{fontSize:20, color:'white'}}>
            {props.children || props.title}
          </Text>
          </View>
          </TouchableOpacity>
  )
}

export default MyButton;
