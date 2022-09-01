import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'

export default function ExpenseForm(this: any) {
  const [inputValue, setAmountValue] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChandedHandler(inputIdentifier: string, enteredVales: string) {
    setAmountValue((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredVales
      }
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <CustomInput
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChandedHandler.bind(this, 'amount'),
            value: inputValue.amount
          }}
        />
        <CustomInput
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChandedHandler.bind(this, 'date'),
            value: inputValue.date
          }}
        />
      </View>
      <CustomInput
        label='Dexcription'
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: inputChandedHandler.bind(this, 'description'),
          value: inputValue.description
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10
  },
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  }
})