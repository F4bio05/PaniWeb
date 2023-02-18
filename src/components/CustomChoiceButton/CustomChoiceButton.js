import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'



// const CustomChoiceButton = ({ onPress, text, side, width, color }) => {
//   return (
//     <View>
//       <Pressable onPress={onPress} style={[styles.container, styles[side], {width: width}, {backgroundColor: color}]}>
//         <Text style={styles.text}>{text}</Text>
//       </Pressable>
//     </View>
//   )
// }

class CustomChoiceButton extends Component{
  constructor() {
    super();
  }

  render = () => {
    return (
      <View>
        <Pressable
          onPress={this.props.onPress}
          style={[
            styles.container,
            styles[this.props.side],
            { width: this.props.width },
            { backgroundColor: this.props.bg },
            {color: this.props.color}
          ]}>
          <Text style={[styles.text, {color:this.props.color}]}>{this.props.text}</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    height: '100%',
    textAlignVertical: 'center',
  },
  left: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  center: {
    borderLeftWidth: 1,
    borderLeftColor: 'black',

    borderRightWidth: 1,
    borderRightColor: 'black',
  },
});

export default CustomChoiceButton