import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type, boxAction, alert }) => {
  return (
    <Pressable onPress={onPress} style={[styles['container_' + type], styles[alert]]}>
      <Text style={[styles['txt_'+type], styles['txt_'+boxAction]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container_text: {
    width: '100%',

    paddingVertical: '10%',
    paddingHorizontal: '10%',

    alignItems: 'center',
    borderRadius: 5,

    backgroundColor: '#3d2df7',
  },
  container_box: {
    width: 40,
    height: 40,
    
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  reset: {
    backgroundColor: 'red',
  },
  txt_remove: {
    // fontSize: 30,
    color: 'red',
  },  
  txt_add: {
    color: '#3d2df7',
  },
  txt_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  txt_box: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default CustomButton;