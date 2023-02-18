import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const ItemLista = ({ name, price, qt, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.type}>{name}</Text>
        <Text style={styles.prezzo}>prezzo: {price}</Text>
      </View>
      <View style={styles.right}>
        <View>
          <View style={styles.top}>
            <Text style={styles.txtQt}>Qt. {qt != -1 ? qt : 0}</Text>
          </View>
          <View style={styles.bottom}>
            <CustomButton
              onPress={() => onPress('-')}
              text='-'
              type='box'
              boxAction='remove'
            />

            <CustomButton
              onPress={() => onPress('+')}
              text='+'
              type='box'
              style={styles.btnAdd}
              boxAction='add'
            />
          </View>
        </View>
          
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row', 
    // gap: 5,

    borderRadius: 10,

    paddingVertical: 5,
  },
  left: {
    width: '65%',

    paddingLeft: 5,

    justifyContent: 'center'
  },
  right: {
    width: '35%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingRight: 5,
  },
  top: {
    width: '100%',

    alignItems: 'center',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  type: {
    color: 'black',
    fontSize: 24,
  },
  prezzo: {
    color: 'black',
  },
  txtQt: {
    color: 'black',
    fontWeight: '500',
  },
  btnRemove: {
    backgroundColor: 'red',
  },
  btnAdd: {
    backgroundColor: 'blue',
  },
});

export default ItemLista