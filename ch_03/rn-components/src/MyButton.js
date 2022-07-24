import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const MyButton = ({title = 'title', onPress = () => {}, children}) => {
  //console.log(props);
  return (
          <TouchableOpacity onPress={onPress}>
          <View style={{backgroundColor:'blue', pading: 10, margin:10}}>
          <Text style={{fontSize:20, color:'white'}}>
            {children || title}
          </Text>
          </View>
          </TouchableOpacity>
  )
}

export default MyButton;
