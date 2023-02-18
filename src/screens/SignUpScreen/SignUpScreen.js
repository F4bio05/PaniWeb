import { View, Text, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import CustomInput from '../../components/CustomInpnut/CustomInput';
import Separator from '../../components/Separator/Separator';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/core';


export default function SignUpFunction () {
  const navigation = useNavigation();

  return <SignUpScreen navigation={navigation} />
}

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      class: '',
      user: '',
      pass: '',
      repeatPass: '',
      warningMessage: ''
    }
  }

  gotoSignInScreen = () => {
    if (this.state.class == '' || this.state.user == '' || this.state.pass == '' || this.state.repeatPass == '') {
      this.setState({
        warningMessage: 'Compilare tutti i campi'
      })
    } else {
      this.setState({
        warningMessage: ''
      });
      this.props.navigation.navigate('SignIn');
    }
  }

  returnSignInScreen = () => {
    this.props.navigation.navigate('SignIn');
  }

  render = () => {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>
          Registrati
        </Text>

        <Separator height='20' />

        <CustomInput
          value={this.state.class}
          setValue={(val) => this.setState({class: val})}
          placeholder='Classe'
        />

        <CustomInput
          value={this.state.user}
          setValue={(val) => this.setState({user: val})}
          placeholder='Username'
        />

        <CustomInput
          value={this.state.pass}
          setValue={(val) => this.setState({pass: val})}
          placeholder='Password'
          secureTextEntry={true}
        />

        <CustomInput
          value={this.state.repeatPass}
          setValue={(val) => this.setState({repeatPass: val})}
          placeholder='Repeat password'
          secureTextEntry={true}
        />

        <Text style={styles.warningMessage}>
          {this.state.warningMessage}
        </Text>

        <Separator height='10' />

        <View style={styles.containerButton}>
          <CustomButton
            onPress={this.gotoSignInScreen}
            text='Sign Up'
            type='text'
          />
        </View>

        <Separator height='10' />

        <Text style={styles.txtSignUp}>
          Do you already have an account?{' '}
          <Text style={styles.goSignUp} onPress={this.returnSignInScreen}>
            Sign In.
          </Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: '30%',
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
    fontSize: 50,
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