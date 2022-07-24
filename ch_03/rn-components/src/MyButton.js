import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({title, onPress, children}) => {
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

MyButton.defaultProps = {
  title: 'default',
  onPress: () => alert('default')
}

MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
}

export default MyButton;

