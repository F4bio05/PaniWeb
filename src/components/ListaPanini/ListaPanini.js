import { StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import ItemLista from '../ItemLista/ItemLista';
import Separator from '../Separator/Separator';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class ListaPanini extends Component{
  constructor() {
    super();
    this.panini = {
      tonnoGamberi: 0,
      cottoFontina: 0,
      arrostoMaio: 0,
      cottoFunghi: 0,
      pomoMozza: 0,
      cotto: 0,
      crudo: 0,
      mortadella: 0,
      salame: 0,
      tonnoMaio: 0,
      vegetariano: 0,
      riccCrudo: 0,
      riccCotto: 0,
      riccVuota: 0,
    }
  }

  updateElement = async () => {
    this.setState({});
    try {
      JSONvalue = JSON.stringify(this.panini);
      // console.warn(this.panini);
      await AsyncStorage.mergeItem('panini', JSONvalue);
    } catch (e) {
      console.warn(e);
    }
  }

  onTonnoGamberiPressed = (action) => {
    if (action == '-') {
      if (this.panini.tonnoGamberi - 1 >= 0) {
        this.panini.tonnoGamberi -= 1;
      }
    } else {
      this.panini.tonnoGamberi += 1;
    }
    this.updateElement();
    console.warn(this.panini.tonnoGamberi);
  }

  onCottoFontinaPressed = (action) => {
    if (action == '-') {
      if (this.panini.cottoFontina - 1 >= 0) {
        this.panini.cottoFontina -= 1;
      }
    } else {
      this.panini.cottoFontina += 1;
    }
    this.updateElement();
  }

  onArrostoMaioPressed = (action) => {
    if (action == '-') {
      if (this.panini.arrostoMaio - 1 >= 0) {
        this.panini.arrostoMaio -= 1;
      }
    } else {
      this.panini.arrostoMaio += 1; 
    }
    this.updateElement();
  }

  onCottoFunghiPressed = (action) => {
    if (action == '-') {
      if (this.panini.cottoFunghi - 1 >= 0) {
        this.panini.cottoFunghi -= 1;
      }
    } else {
      this.panini.cottoFunghi += 1;
    }
    this.updateElement();
  }

  onPomoMozzaPressed = (action) => {
    if (action == '-') {
      if (this.panini.pomoMozza - 1 >= 0) {
        this.panini.pomoMozza -= 1;
      }
    } else {
      this.panini.pomoMozza += 1;
    }
    this.updateElement();
  }

  onCottoPressed = (action) => {
    if (action == '-') {
      if (this.panini.cotto - 1 >= 0) {
        this.panini.cotto -= 1;
      }
    } else {
      this.panini.cotto += 1;
    }
    this.updateElement();
  }

  onCrudoPressed = (action) => {
    if (action == '-') {
      if (this.panini.crudo - 1 >= 0) {
        this.panini.crudo -= 1;
      }
    } else {
      this.panini.crudo += 1;
    }
    this.updateElement();
  }

  onMortadellaPressed = (action) => {
    if (action == '-') {
      if (this.panini.mortadella - 1 >= 0) {
        this.panini.mortadella -= 1;
      }
    } else {
      this.panini.mortadella += 1;
    }
    this.updateElement();
  }

  onSalamePressed = (action) => {
    if (action == '-') {
      if (this.panini.salame - 1 >= 0) {
        this.panini.salame -= 1;
      }
    } else {
      this.panini.salame += 1;
    }
    this.updateElement();
  }

  onTonnoMaioPressed = (action) => {
    if (action == '-') {
      if (this.panini.tonnoMaio - 1 >= 0) {
        this.panini.tonnoMaio -= 1;
      }
    } else {
        this.panini.tonnoMaio += 1;
    }
    this.updateElement();
  }

  onVegetarianoPressed = (action) => {
    if (action == '-') {
      if (this.panini.vegetariano - 1 >= 0) {
        this.panini.vegetariano -= 1;
      }
    } else {
        this.panini.vegetariano += 1;
    }
    this.updateElement();
  }

  onRiccCrudoPressed = (action) => {
    if (action == '-') {
      if (this.panini.riccCrudo - 1 >= 0) {
        this.panini.riccCrudo -= 1;
      }
    } else {
        this.panini.riccCrudo += 1;
    }
    this.updateElement();
  }

  onRiccCottoPressed = (action) => {
    if (action == '-') {
      if (this.panini.riccCotto - 1 >= 0) {
        this.panini.riccCotto -= 1;
      }
    } else {
        this.panini.riccCotto += 1;
    }
    this.updateElement();
  }

  onRiccVuotaPressed = (action) => {
    if (action == '-') {
      if (this.panini.riccVuota - 1 >= 0) {
        this.panini.riccVuota -= 1;
      } 
    } else {
      this.panini.riccVuota += 1;
    }
    this.updateElement();
  }

  render = () => {
    return (
      <ScrollView style={[styles.container, {height: this.props.show ? '100%' : 0}]}>

        <ItemLista
          name='Tonno e gamberi'
          price='2.00€'
          qt={this.panini.tonnoGamberi}
          onPress={this.onTonnoGamberiPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Cotto e fontina'
          price='2.00€'
          qt={this.panini.cottoFontina}
          onPress={this.onCottoFontinaPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Arrosto e maionese'
          price='2.00€'
          qt={this.panini.arrostoMaio}
          onPress={this.onArrostoMaioPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Cotto e crema di funghi'
          price='2.00€'
          qt={this.panini.cottoFunghi}
          onPress={this.onCottoFunghiPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Pomodoro e mozzarella'
          price='1.70€'
          qt={this.panini.pomoMozza}
          onPress={this.onPomoMozzaPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Posciutto cotto'
          price='1.70€'
          qt={this.panini.cotto}
          onPress={this.onCottoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Posciutto crudo'
          price='1.70€'
          qt={this.panini.crudo}
          onPress={this.onCrudoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Mortadella'
          price='1.70€'
          qt={this.panini.mortadella}
          onPress={this.onMortadellaPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Salame'
          price='1.70€'
          qt={this.panini.salame}
          onPress={this.onSalamePressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Tonno e maionese'
          price='1.70€'
          qt={this.panini.tonnoMaio}
          onPress={this.onTonnoMaioPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Vegetariano'
          price='1.70€'
          qt={this.panini.vegetariano}
          onPress={this.onVegetarianoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Ricciola con crudo'
          price='1.70€'
          qt={this.panini.riccCrudo}
          onPress={this.onRiccCrudoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Ricciola con cotto'
          price='1.70€'
          qt={this.panini.riccCotto}
          onPress={this.onRiccCottoPressed}
        />
        <Separator height='10' />

        <ItemLista
          name='Ricciola vuota'
          price='1.10€'
          qt={this.panini.riccVuota}
          onPress={this.onRiccVuotaPressed}
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
});