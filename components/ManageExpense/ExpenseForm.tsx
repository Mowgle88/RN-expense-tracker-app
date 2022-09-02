import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../UI/CustomButton';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import { getFormattedDate } from '../../util/date';

interface ExpenseFormProps {
  onCancel: () => void,
  onSubmit: (expenseData: IDummyExpenses) => void,
  submitButtonLabel: string,
  defaultValues: IDummyExpenses
}

export default function ExpenseForm(this: any, { onCancel, onSubmit, submitButtonLabel, defaultValues }: ExpenseFormProps) {
  const [inputValue, setAmountValue] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  function inputChandedHandler(inputIdentifier: string, enteredVales: string) {
    setAmountValue((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredVales
      }
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check your input values')
      return
    }

    onSubmit(expenseData);
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
            keyboardType: 'decimal-pad',
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
      <View style={styles.buttons}>
        <CustomButton style={styles.button} onPress={onCancel} mode={'flat'}>Cancel</CustomButton>
        <CustomButton style={styles.button} onPress={submitHandler}>{submitButtonLabel}</CustomButton>
      </View>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
})