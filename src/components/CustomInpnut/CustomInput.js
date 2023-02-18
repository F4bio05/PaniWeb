import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8c8c8',
    width: '100%',

    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color: 'white'
  },
});

export default CustomInput