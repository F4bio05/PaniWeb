import { StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import ItemLista from '../ItemLista/ItemLista';
import Separator from '../Separator/Separator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ListaPizze extends Component {

  constructor() {
    super();
    this.pizze = {
      margherita: 0,
      salsiccia: 0,
      wurstel: 0,
    }
  }

  updateElement = async () => {
    this.setState({});
    try {
      JSONvalue = JSON.stringify(this.pizze);
      // console.warn(this.state);
      await AsyncStorage.mergeItem('pizze', JSONvalue);
    } catch (e) {
      console.warn(e);
    }
    
  }

  onMargheritaPressed = (action) => {
    if (action == '-') {
      if (this.pizze.margherita - 1 >= 0) {
        this.pizze.margherita -= 1;
      }
    } else {
      this.pizze.margherita += 1;
    }
    this.updateElement('margherita');
    console.warn(this.pizze.margherita);
  }

  onSalsicciaPressed = (action) => {
    if (action == '-') {
      if (this.pizze.salsiccia - 1 >= 0) {
        this.pizze.salsiccia -= 1;
      }
    } else {
        this.pizze.salsiccia += 1;
    }
    this.updateElement();
  }
  
  onWurstelPressed = (action) => {
    if (action == '-') {
      if (this.pizze.wurstel - 1 >= 0) {
        this.pizze.wurstel -= 1;
      }
    } else {
      this.pizze.wurstel += 1;
    }
    this.updateElement();
  }

  render = () => {
    return (
      <ScrollView style={[styles.container, {height: this.props.show ? '100%' : 0}]}>

        <ItemLista
          name='Margherita'
          price='2.00€'
          qt={this.pizze.margherita}
          onPress={this.onMargheritaPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Salsiccia'
          price='2.00€'
          qt={this.pizze.salsiccia}
          onPress={this.onSalsicciaPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Wurstel'
          price='2.00€'
          qt={this.pizze.wurstel}
          onPress={this.onWurstelPressed}
        />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 3,
    paddingHorizontal: 10,
  },
});