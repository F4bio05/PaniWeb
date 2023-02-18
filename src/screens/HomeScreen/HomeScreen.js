import { View, StyleSheet, Image, Dimensions, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/core';
import CustomChoiceButton from '../../components/CustomChoiceButton/CustomChoiceButton';
import Logo from '../../../asssets/images/logo.png';
import Separator from '../../components/Separator/Separator';
import ListaPizze from '../../components/ListaPizze/ListaPizze';
import ListaPanini from '../../components/ListaPanini/ListaPanini';
import ListaDolci from '../../components/ListaDolci/ListaDolci';
import CustomButton from '../../components/CustomButton/CustomButton';


export default function HomeFunction() {
  const navigation = useNavigation();

  return <HomeScreen navigation={navigation} />
} 

const { height, width } = Dimensions.get('window');

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      pizzeBg: '#3d2df7',
      pizzeColor: 'white',

      paniniBg: '',
      paniniColor: 'black',

      dolciBg: '',
      dolciColor: 'black',

      showPizze: true,
      showPanini: false,
      showDolci: false,
    }
    this.resetData();
  }

  resetData = async () => {
    const keys = [['pizze', '{}'], ['panini', '{}'], ['dolci', '{}']];
    try {
      await AsyncStorage.multiSet(keys);
    } catch (e) {
      console.warn(e);
    }
  }

  onPizzePressed = () => {
    this.setState({
      pizzeBg: '#3d2df7',
      pizzeColor: 'white',

      paniniBg: 'white',
      paniniColor: 'black',

      dolciBg: 'white',
      dolciColor: 'black',

      showPizze: true,
      showPanini: false,
      showDolci: false,
    });
  }

  onPaniniPressed = () => {
    this.setState({
      pizzeBg: 'white',
      pizzeColor: 'black',

      paniniBg: '#3d2df7',
      paniniColor: 'white',

      dolciBg: 'white',
      dolciColor: 'black',

      showPizze: false,
      showPanini: true,
      showDolci: false,
    });
  }

  onDolciPressed = () => {
    this.setState({
      pizzeBg: 'white',
      pizzeColor: 'black',

      paniniBg: 'white',
      paniniColor: 'black',

      dolciBg: '#3d2df7',
      dolciColor: 'white',

      showPizze: false,
      showPanini: false,
      showDolci: true,
    });
  }

  onRiepilogoPressed = async () => {
    // try {
    //   const value = await AsyncStorage.get('prova', JSONvalue);
    // } catch (e) {
    //   console.warn(e);
    // }
    
      this.readKey()
  }

  readKey = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('pizze')
      this.element = jsonValue != null ? JSON.parse(jsonValue) : null
      // const dict = JSON.parse(jsonValue);
      console.warn(this.element);
    } catch(e) {
      console.warn(e);
    }
  }

  reset = () => {
    this.resetData();
    // this.props.navigation.navigate('Home');
    // return <HomeFunction />
  }

  render = () => {
    return (
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />

        <View style={styles.buttonContainer}>
          <CustomChoiceButton
            onPress={this.onPizzePressed}
            text='Pizze'
            side='left'
            width={width / 4}
            bg={this.state.pizzeBg}
            color={this.state.pizzeColor}
          />

          <CustomChoiceButton
            onPress={this.onPaniniPressed}
            text='Panini'
            side='center'
            width={width / 4}
            bg={this.state.paniniBg}
            color={this.state.paniniColor}
          />
          <CustomChoiceButton
            onPress={this.onDolciPressed}
            text='Dolci'
            side='right'
            width={width / 4}
            bg={this.state.dolciBg}
            color={this.state.dolciColor}
          />
        </View>

        <Separator height='15' />
      
        <View style={styles.scrollFrame}>
          {/* {
            this.state.showPizze ? (
              <ListaPizze />
            ) : this.state.showPanini ? (
                <ListaPanini />
            ) : this.state.showDolci ? (
                  <ListaDolci />
            ) : null
          } */}
          <ListaPizze show={this.state.showPizze} />
          <ListaPanini show={this.state.showPanini} />
          <ListaDolci show={this.state.showDolci} />
        </View>

        <Separator height='20' />

        <View style={styles.btnContainer}>
          <CustomButton
            onPress={this.onRiepilogoPressed}
            text='Riepilogo'
            type='text'
          />
        </View>

        <Separator height='10' />

        <View style={styles.btnResetContainer}>
          <CustomButton
            onPress={this.reset}
            text='Reset'
            type='text'
            alert='reset'
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',

    backgroundColor: '#e8e8e8',

    alignItems: 'center',

    paddingHorizontal: 40,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  buttonContainer: {
    // backgroundColor: '#c8c8c8',
    backgroundColor: 'white',

    borderBottomColor: '#c8c8c8',
    borderBottomWidth: 4,

    borderRadius: 10,
    height: 45,
    width: '93%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollFrame: {
    width: '120%',
    height: '40%',
    backgroundColor: '#c8c8c8',

    borderRadius: 10,

    paddingVertical: 20,

    alignItems : 'center',
  },
  btnContainer: {
    width: '50%',
  },
  btnResetContainer: {
    width: '25%',
  },
});