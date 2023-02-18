import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class SummaryScreen extends Component {
  constructor() {
    super();

    this.pizze = {};
    this.panini = {};
    this.dolci = {};
  }

  render = () => {
    return (
      <View style={styles.root}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {

  },
});