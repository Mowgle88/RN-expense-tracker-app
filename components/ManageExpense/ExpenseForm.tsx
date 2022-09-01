import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'

export default function ExpenseForm() {

  function amountChandedHandler() { }

  return (
    <View>
      <CustomInput
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChandedHandler
        }}
      />
      <CustomInput
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => { }
        }}
      />
      <CustomInput
        label='Dexcription'
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})