import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInpnut/CustomInput';
import Logo from '../../../asssets/images/logo.png';
import Separator from '../../components/Separator/Separator';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/core';


export default function SignInFunction () {
  const navigation = useNavigation();

  return <SignInScreen navigation={navigation} />
}


const { height, width } = Dimensions.get('window');


class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: 'asd',
      pass: 'asd',
      warningMess: ''
    };
  }

  updateUser = (val) => {
    this.setState({
      user: val,
    })
  }

  updatePassword = (val) => {
    this.setState({
      pass: val,
    })
  } 

  gotoSignUpScreen = () => {
    this.setState({
      warningMess: '',
    });
    this.props.navigation.navigate('SignUp');
  }

  gotoHomeScreen = () => {
    // console.warn('click');
    if (this.state.pass == '' || this.state.user == '') {
      this.setState({
        warningMess: 'Compilare tutti i campi',
      });
    }
    else {
      this.setState({
        warningMess: '',
      });
      this.props.navigation.navigate('Home');
    }
  }

  render = () => {
    return (
      <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
      
      {/* <Text style={styles.title}>
        Welcome back
      </Text> */}

      {/* <Separator height='10' /> */}

      <CustomInput
        value={this.state.user}
        setValue={(val) => this.updateUser(val)}
        placeholder='Username'
      />

      <CustomInput
        value={this.state.pass}
        setValue={(val) => this.updatePassword(val)}
        placeholder='Password'
        secureTextEntry={true}
      />

      <Text style={styles.warningMessage} >
        {this.state.warningMess}
      </Text>

      <Separator height='10' />

      <View style={styles.containerButton}>
        <CustomButton
          onPress={this.gotoHomeScreen}
          text='Sign in'
          type='text'
        />
      </View>
        
      <Separator height='10' />
    
      <Text style={styles.txtSignUp}>
        Don't have an account? Click{' '}
        <Text style={styles.goSignUp} onPress={this.gotoSignUpScreen}>
          here.
        </Text>
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: '10%',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  containerButton: {
    width: '100%',
    paddingHorizontal: 80,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
  },
  txtSignUp: {
    color: 'black',
  },
  goSignUp: {
    color: 'blue',
  },
  warningMessage: {
    color: 'red',
  },
});