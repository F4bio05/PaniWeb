import { StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import ItemLista from '../ItemLista/ItemLista';
import Separator from '../Separator/Separator';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class ListaDolci extends Component{
  constructor() {
    super();
    this.dolci = {
      cornCioccolato: 0,
      cornMarmellata: 0,
      ofeliaCrema: 0,
    }

  }

  updateElement = async () => {
    try {
      JSONvalue = JSON.stringify(this.dolci);
      // console.warn(this.dolci);
      await AsyncStorage.mergeItem('dolci', JSONvalue);
    } catch (e) {
      console.warn(e);
    }
  }

  onCornCioccolatoPressed = (action) => {
    if (action == '-') {
      if (this.dolci.cornCioccolato - 1 >= 0) {
        this.dolci.cornCioccolato -= 1;
      }
    } else {
      this.dolci.cornCioccolato += 1;
    }
    this.updateElement();
    console.warn(this.dolci.cornCioccolato);
  }

  onCornMarmellataPressed = (action) => {
    if (action == '-') {
      if (this.dolci.cornMarmellata - 1 >= 0) {
        this.dolci.cornMarmellata -= 1;
      }
    } else {
      this.dolci.cornMarmellata += 1;
    }
    this.updateElement();
  }

  onOfeliaCremaPressed = (action) => {
    if (action == '-') {
      if (this.dolci.ofeliaCrema - 1 >= 0) {
        this.dolci.ofeliaCrema -= 1;
      }
    } else {
      this.dolci.ofeliaCrema += 1;
    }
    this.updateElement();
  }

  render = () => {
    return (
      <ScrollView style={[styles.container, {height: this.props.show ? '100%' : 0}]}>
         
        <ItemLista
          name='Cornetto cioccolato'
          price='1.10€'
          qt={this.dolci.cornCioccolato}
          onPress={this.onCornCioccolatoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Cornetto marmellata'
          price='1.10€'
          qt={this.dolci.cornMarmellata}
          onPress={this.onCornMarmellataPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Ofelia crema'
          price='1.10€'
          qt={this.dolci.ofeliaCrema}
          onPress={this.onOfeliaCremaPressed}
        />
        <Separator height='5' />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 3,
    paddingHorizontal: 10,
  },
})